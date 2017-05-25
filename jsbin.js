const DOM = React.DOM;

function BlogItem (props) {
  return <div>
    <TextBox text={props.spanText.text} />
   </div>
}

function Image (props) {
    return <img src={props.src}
                width={props.width}
                height={props.height}
                alt={props.altText}/>;
}

function TextBox (props) {
  return <span>{props.spanText.text}</span>;
}

const object = {
  imageProps : {
    src: 'http://www.rd.com/wp-content/uploads/sites/2/2016/02/06-train-cat-shake-hands.jpg',
    width: '260px',
    height: '160px',
    altText: 'A cat picture'
  },
  spanText : {
    text: 'This is span text'
  }
}

//const imageProps = {
//  src: 'http://www.rd.com/wp-content/uploads/sites/2/2016/02/06-train-cat-shake-hands.jpg',
//  width: '260px',
//  height: '160px',
//  altText: 'A cat picture'
//}

//const spanText = {
//  text: 'This is span text'
//}

//ReactDOM.render(
//  React.createElement(TextBox, spanText),
//  document.getElementById('app')
//)

ReactDOM.render(
  React.createElement(BlogItem, object),
  document.getElementById('app')
)


