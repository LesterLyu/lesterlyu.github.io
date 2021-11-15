import React from "react";
import {Container, Divider} from '@material-ui/core/index';
import {Resume, Title, Interest, Item, Education, Experience, Footer} from '../components/Intro'

function Intro() {
    return (
        <Container style={{maxWidth: 800}}>
            <Divider/>
            {/*<hr className={classes.hr}/>*/}
            <Resume/>
            <Title name="Public Open Sourced Projects"/>
            <Item name="Owlready2"
                  description="Owlready2 is a library for ontology-oriented programming in Python. It can manage ontologies and
                   knowledge graphs in a graph database, i.e. GraphDB, connected through SPARQL endpoint. It can
                   lso be used as an ORM (Object-relational mapper). Classes & properties & instances defined in the
                   graph database can be mapped into Python Objects/Classes."
                  link="https://github.com/LesterLyu/owlready2"/>

            <Item name="Course Oracle"
                  description="Course Oracle provides worldwide students a way to share course
                        materials and course ratings. Course rating can be stored on the block chain optionally. User uses
                        cryptocurrencies to purchase course materials, the user who shared the materials earns a portion
                        from the purchase and can withdraw to their own wallet."
                  link="https://github.com/LesterLyu/CourseOracle"/>
            <Item name="Excel Formula Parser"
                  description="A JavaScript library to parse and evaluate MS Excel/Google Sheets formulas with near 300
                   formulas support and competitive performance."
                  demo="/demo/fast-formula-parser"
                  link="https://www.npmjs.com/package/fast-formula-parser"/>
            <Item name="MOHLTC Data Project"
                  description="A web app designed for businesses to create data collection forms on the fly and collect
                   data in a short period of time."
                  noDemo={true}
                  link="https://github.com/LesterLyu/MOHLTC-DataProject"/>
            <Item name="Xlsx Populate"
                  description="A JavaScript library that creates or modifies MS Excel files. It supports real-time
                  formula evaluating and is able to run in the browser."
                  link="https://github.com/LesterLyu/xlsx-populate"/>
            <Item name="Connect Four AI"
                  description="An  implementation of Minimax Algorithm on Connect Four with GUI."
                  link="https://github.com/LesterLyu/CSC384Project"/>
            <Item name="UofT Timetable"
                  description="A timetable Android app for students in University of Toronto."
                  playStore="https://play.google.com/store/apps/details?id=com.lvds2000.utsccsuntility"
                  link="https://github.com/LesterLyu/UofT-Timetable"/>
            <Item name="Acorn API"
                  description="An Acorn API for University of Toronto. Acorn is UofT' s student information service.
                   It has no public API. I wrote this to support the UofT Timetable above."
                  link="https://github.com/LesterLyu/AcornAPI"/>
            <Item name="Object Detection Webapp (requires camera)"
                  description="A react wrapper for object detection. Pre-trained Model is from Tenserflow.js "
                  demo="/demo/object-detection"
                  link="https://github.com/LesterLyu/ObjectDetectionReact"/>

            <Divider/>

            <Title name="Interests"/>

            <Interest name={"Web Full Stack Programming"}/>
            <Interest name={"Computer Networks & Low Level Programming"}/>
            <Interest name={"Machine Learning & Visual Computing"}/>

            <Divider/>

            <Title name="Experiences"/>
            <Experience title="Software Engineer"
                        company="Department of MIE, University of Toronto"
                        link="https://www.mie.utoronto.ca/"
                        duration="May 2021 – Present"/>
            <Experience title="Junior Web Developer"
                        company="School of Cities, University of Toronto"
                        link="https://www.schoolofcities.utoronto.ca/"
                        duration="May 2020 – April 2021"/>
            <Experience title="Research Assistance"
                        company="Department of MIE, University of Toronto"
                        link="https://www.utoronto.ca/"
                        duration="January 2020 – April 2020"/>
            <Experience title="Software Developer Intern"
                        company="Ontario Government Ministry of Health and Long-Term Care"
                        link="http://www.health.gov.on.ca/en/"
                        duration="September 2018 – August 2019"/>
            <Experience title="Software Developer Co-op"
                        company="Xiamen Dnake Intelligent Technology Co., Ltd."
                        link="https://www.dnake-global.com/"
                        duration="June 2016 – August 2016"/>

            <Divider/>

            <Title name="Education"/>
            <Education/>
            <Divider/>
            <Footer/>
        </Container>
    );
}

export default Intro;
