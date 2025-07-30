export function getData() {
  const value = `
    <h2>Meet DHTMLX Rich Text Editor!</h2>
    <p>Create and edit text with ease! DHTMLX RichText is a powerful editor that allows you to:</p>
    <ul>
        <li>Format text: make it <b>bold</b>, <i>italic</i>, <u>underlined</u>, or <s>strikethrough</s>, choose fonts (e.g., Arial), <span style="font-size:16px;">text size</span>, <span style="color:#0066CC;">font color,</span> and <span style="color:#FFFFFF;background:#0066CC;">background color.</span></li>
        <li>Add headings of different levels (from H1 to H6) or use the Paragraph style, align text to the left, center, right, or justify, and create numbered or bulleted lists for structured content.</li>
        <li>Insert hyperlinks for navigation to external resources, add images for visual enhancement, insert horizontal lines for separation, and use subscripts (e.g., x₂) or superscripts (e.g., x²) for scientific or mathematical notation.</li>
        <li>Work with HTML and Markdown for flexible integration, switching to code mode to edit the source code directly.</li>
        <li>Clear formatting with a single click to reset the text to its original state if something goes wrong.</li>
        <li>Customize the toolbar to suit your needs, adding or removing features as desired.</li>
        <li>Enjoy an adaptive design that works seamlessly on any device, including mobile.</li>
        <li>Use Undo and Redo functions to easily revert or reapply changes as needed.</li>
    </ul>
    <p><b>To learn more, read our <a href="https://docs.dhtmlx.com/richtext/">documentation</a> and check the <a href="https://snippet.dhtmlx.com/q8j4qqq9?tag=richtext">samples</b></a>.</p>
    <hr>
    <blockquote>It is very easy to get things up and running.</blockquote>
    <p><img src="https://docs.dhtmlx.com/richtext-backend/images/3490994099/i.png" style="width:415px;height:276px;"></p>
  `;
  return { value };
}
