/**
 * Task: Write code that a caller can use to transform an arbutrarily nested  data structure into either html or a JavaScript literal
 * Details: Should handle a linear collection (array / list), associative collection (dictionary / map), and an individual item (string / number / etc) 
 */

class ParseData {

  static run(data, format) {
    const pd = new ParseData();
    if (typeof data == 'string' || typeof data == 'number') {
      return pd.handleItem(data, format);
    }
    if (Array.isArray(data)) {
      return pd.handleArray(data, format);
    }
    if (typeof data == 'object' && !Array.isArray(data)) {
      return pd.handleObject(data, format);
    }
  }

  handleItem(data, format) {
    if (format == 'html') {
      return `<p>${data}</p>`;
    } else if (format == 'javascript') {
      return data.toString();
    }
  }

  handleArray(data, format) {
    if (format == 'html') {
      let listItems = '';
      let descList;
      data.forEach(item => {
        if (typeof item == 'object') {
          descList = this.handleObject(item, 'html');
          listItems += `\t<li>${descList}\t</li>\n`;
        } else {
          listItems += `\t<li>${item}</li>\n`;
        }
      });
      return `<ol>\n${listItems}</ol>`;
    } else if (format == 'javascript') {
      return JSON.stringify(data);
    }
  }

  handleObject(data, format) {
    if (format == 'html') {
      let dataItems = '';
      Object.keys(data).forEach((key) => {
        dataItems += `\t\t\t<dt>${key}</dt>\n\t\t\t<dd>${data[key]}</dd>\n`;
      });
      return `\n\t\t<dl>\n${dataItems}\t\t</dl>\n`;
    } else if (format == 'javascript') {
      return JSON.stringify(data);
    }
  }
}
