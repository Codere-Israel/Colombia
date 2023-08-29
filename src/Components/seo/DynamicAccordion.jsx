import React from "react";
import { Accordion } from "react-bootstrap";

function DynamicAccordion({ data }) {
  // Function to process and display each data item
  const renderDataItem = (item, key) => {
    // If the element is a string, return it as a paragraph
    if (typeof item === "string") {
      return <p key={key}>{item}</p>;
    }
    // If the element is an array, return it as a list
    else if (Array.isArray(item)) {
      // If the element is a two-dimensional array, return it as a table
      if (Array.isArray(item[0])) {
        return (
          <table key={key}>
            {item.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {row.map((cell, cellIndex) => (
                  <td key={cellIndex}>{cell}</td>
                ))}
              </tr>
            ))}
          </table>
        );
      } else {
        return (
          <ul key={key}>
            {item.map((li, k) => (
              <li key={k}>{li}</li>
            ))}
          </ul>
        );
      }
    }
    // If the element is an object
    else if (typeof item === "object") {
      // If the element has an 'image' field, return it as an image
      if (item.image) {
        return <img key={key} src={item.image} alt="" />;
      }
      // If an item has a 'link' field, return it as a link
      else if (item.link) {
        return (
          <a key={key} href={item.link}>
            {item.linkTitle}
          </a>
        );
      }
    }
  };

  return (
    <Accordion defaultActiveKey="none">
      {data.map((t, index) => (
        <Accordion.Item eventKey={index.toString()} key={index}>
          <Accordion.Header as={"h3"}>{t.title}</Accordion.Header>
          <Accordion.Body as={"div"}>
            {Object.entries(t.data).map(([key, value]) => {
              // Check the key of the data item and return the required JSX
              switch (key) {
                case "subTitle":
                  return <h3 key={key}>{value}</h3>;
                case "p1":
                case "p2":
                case "p3":
                  return <p key={key}>{value}</p>;
                case "list":
                case "tableData":
                  return renderDataItem(value, key);
                case "image":
                case "link":
                  return renderDataItem({ [key]: value }, key);
                default:
                  return null;
              }
            })}
          </Accordion.Body>
        </Accordion.Item>
      ))}
    </Accordion>
  );
}

export default DynamicAccordion;

// Exemple JSON
// [
// 	{
// 		"title": "Accordion header 1",
// 		"data": {
// 			"subTitle": "Accordion subheading 1",
// 			"p1": "Paragraph 1 accordion 1",
// 			"list": ["List item 1", "List item 2", "List item 3"],
// 			"tableData": [
// 				["Cell 1", "Cell 2"],
// 				["Cell 3", "Cell 4"]
// 			],
// 			"image": "url_image",
// 			"link": "url_link",
// 			"p2": "Paragraph 2 accordion 1",
// 			"p3": "Paragraph 3 accordion 1"
// 		}
// 	},
// 	{
// 		"title": "Accordion header 2",
// 		"data": {
// 			"subTitle": "Accordion subheading 2",
// 			"p1": "Paragraph 1 accordion 2",
// 			"list": ["List item 1", "List item 2", "List item 3"],
// 			"tableData": [
// 				["Cell 1", "Cell 2"],
// 				["Cell 3", "Cell 4"]
// 			],
// 			"image": "url_image",
// 			"link": "url_link",
// 			"p2": "Paragraph 2 accordion 2",
// 			"p3": "Paragraph 3 accordion 2"
// 		}
// 	}
// ]
