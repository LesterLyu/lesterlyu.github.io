import React from "react";
import * as cocoSsd from "@tensorflow-models/coco-ssd/dist/index";
import "@tensorflow/tfjs/dist/index";
import "./styles.css";
import MyAppBar from "../../../components/AppBar";
import Button from "@material-ui/core/Button";

class App extends React.Component {
    videoRef = React.createRef();
    canvasRef = React.createRef();
    state = {
        info: '\tloading model, please wait. This may take 10 seconds...\n For ios devices, please use Safari.',
        fps: 0
    };
    stop = false;
    front = true;
    time = Date.now();
    frames = 0;

    constructor(props) {
        super(props);
        // calculate appropriate camera size
        if (window.innerHeight > window.innerWidth) {
            // landscape mode
            this.idealHeight = 960;
            this.idealWidth = 1280;
            this.canvasWidth = window.innerWidth;
            this.canvasHeight = window.innerWidth / 3 * 4;
        } else {
            this.idealHeight = 720;
            this.idealWidth = 1280;
            this.canvasWidth = window.innerHeight / 9 * 16;
            this.canvasHeight = window.innerHeight;
        }
    }

    componentDidMount() {
        this.start()
            .then(() => {
                return cocoSsd.load();
            })
            .then(model => {
                this.model = model;
                this.stop = false;
                this.setState({info: ''});
                this.detectFrame(this.videoRef.current);
            })
            .catch(error => {
                this.setState({info: error.message});
                console.log(error);
            });
        const ctx = this.canvasRef.current.getContext("2d");
        ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    }

    start() {
        if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
            return navigator.mediaDevices
                .getUserMedia({
                    audio: false,
                    video: {
                        facingMode: this.front ? "user" : "environment",
                        width: {ideal: this.idealWidth},
                        height: {ideal: this.idealHeight},
                    }
                })
                .then(stream => {
                    console.log(stream);
                    this.setState({info: 'Loading Model, this may take 10 seconds...'});
                    window.stream = stream;
                    this.videoRef.current.srcObject = stream;
                    return new Promise((resolve, reject) => {
                        this.videoRef.current.onloadedmetadata = () => {
                            resolve();
                        };
                    });
                })
        } else {
            return Promise.reject("Browser not supported.");
        }
    }

    detectFrame = (video) => {
        if (this.stop)
            return;
        if (Date.now() - this.time >= 1000) {
            this.setState({fps: this.frames});
            this.frames = 0;
            this.time = Date.now();
        }
        this.frames++;
        this.model.detect(video).then(predictions => {
            this.renderPredictions(predictions);
            requestAnimationFrame(() => {
                this.detectFrame(video);
            });
        });
    };

    renderPredictions = predictions => {
        const ctx = this.canvasRef.current.getContext("2d");
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        // Font options.
        const font = "16px sans-serif";

        ctx.font = font;
        ctx.textBaseline = "top";
        ctx.globalAlpha = 0.7;
        predictions.forEach(prediction => {
            const x = prediction.bbox[0];
            const y = prediction.bbox[1];
            const width = prediction.bbox[2];
            const height = prediction.bbox[3];
            // Draw the bounding box.
            ctx.strokeStyle = "#00FFFF";
            ctx.lineWidth = 2;
            ctx.strokeRect(x, y, width, height);
            // Draw the label background.
            ctx.fillStyle = "#00FFFF";
            const textWidth = ctx.measureText(prediction.class + ' 99%').width;
            const textHeight = parseInt(font, 10); // base 10
            ctx.fillRect(x + 1, y + 1, textWidth + 2, textHeight + 2);
        });

        predictions.forEach(prediction => {
            const x = prediction.bbox[0];
            const y = prediction.bbox[1];
            // Draw the text last to ensure it's on top.
            ctx.fillStyle = "#000000";
            ctx.fillText(prediction.class + ' ' + (prediction.score * 100).toPrecision(2) + '%', x + 1, y + 1);
        });
    };

    switchCamera = () => {
        this.stop = true;
        if (window.stream) {
            window.stream.getTracks().forEach(t => {
                t.stop();
            })
        }
        this.front = !this.front;
        console.log(this.front);
        this.start().then(() => {
            this.stop = false;
            this.setState({info: ''});
            this.detectFrame(this.videoRef.current);
        });
    };

    render() {
        return (
            <div>
                <MyAppBar title={"Object Detection"}/>
                <video
                    className="size"
                    autoPlay
                    playsInline
                    muted
                    ref={this.videoRef}
                    width={this.canvasWidth}
                    height={this.canvasHeight}
                />
                <canvas
                    className="size"
                    ref={this.canvasRef}
                    width={window.devicePixelRatio * this.canvasWidth}
                    height={window.devicePixelRatio * this.canvasHeight}
                    style={{
                        width: this.canvasWidth,
                        height: this.canvasHeight
                    }}
                />
                {this.state.fps !== 0 ?
                    <h4 style={{display: 'absolute', top: 0, left: 0, color: '#aaa'}}>{this.state.fps}</h4>
                    : ''}
                <h4 style={{display: this.state.info.length ? 'show' : 'none',}}>{this.state.info}</h4>
                <Button variant="contained" style={{position: 'absolute', top: window.innerHeight - 60, height: 40}}
                        color="primary" onClick={this.switchCamera}>Switch Camera
                </Button>
            </div>
        );
    }
}

export default App;
