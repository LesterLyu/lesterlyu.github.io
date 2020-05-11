const fetch = require('node-fetch');
const {parse} = require('node-html-parser');
const fs = require('fs');
const util = require('util')
const streamPipeline = util.promisify(require('stream').pipeline)

const saveFile = async (url, fileName, location = '../../../public/images/') => {
  if (fs.existsSync(location + fileName)) return;

  const response = await fetch(url)
  if (!response.ok) throw new Error(`unexpected response ${response.statusText}`);
  await streamPipeline(response.body, fs.createWriteStream(location + fileName))
}

const getDiyItems = async () => {
  const response = await fetch('https://wiki.biligame.com/dongsen/DIY%E9%85%8D%E6%96%B9');
  const body = await response.text();
  const document = parse(body);
  const itemNodes = document.querySelectorAll('table')[1].childNodes[1].querySelectorAll('tr');
  itemNodes.splice(0, 1);

  const items = [];

  for (const node of itemNodes) {
    const itemNode = node.querySelector('a');

    // save image
    const imgUrls = itemNode.querySelector('img').getAttribute('srcset').split(',');
    const imgUrl = imgUrls[imgUrls.length - 1].trim().slice(0, -3);
    const fileName = imgUrl.split('/').slice(-1)[0];
    await saveFile(imgUrl, fileName);

    // get details
    const category = node.querySelectorAll('td')[1].text.trim();
    const how = node.querySelectorAll('td')[2].text.trim();
    const space = node.querySelectorAll('td')[3].text.trim();
    const materials = node.querySelectorAll('td')[4].text.trim();

    items.push({
      label: itemNode.getAttribute('title'),
      name: fileName.slice(0, -4),
      category, how, space, materials
    })
  }
  fs.writeFileSync('../diy/diy.json', JSON.stringify(items));

  console.log('Finished')
}


getDiyItems();
