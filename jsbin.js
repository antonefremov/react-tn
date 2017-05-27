const DOM = React.DOM;

const blogs = [
  {
    imageProps : {
      src: 'http://www.rd.com/wp-content/uploads/sites/2/2016/02/06-train-cat-shake-hands.jpg',
      width: '260px',
      height: '160px',
      altText: 'A cat picture'
    },
    spanText : {
      text: 'A kitten says Hello'
    }
 },
 {
   imageProps : {
      src: 'https://www.cdc.gov/features/dog-bite-prevention/dog-bite-prevention_456px.jpg',
      width: '270px',
      height: '180px',
      altText: 'A dog picture'
    },
    spanText : {
      text: 'A doggy says Bye-bye'
    }
 },
 {
   imageProps : {
      src: 'https://ih1.redbubble.net/image.77561382.6850/raf,750x1000,075,t,101010:01c5ca27c6.u2.jpg',
      width: '270px',
      height: '320px',
      altText: 'Terminator picture'
    },
    spanText : {
      text: "Arnie says he'd be back"
    }
 }
]

function TextBox(props) {
  return <span>{props.text}</span>;
}

function Image(props) {
    return <img src={props.src}
                width={props.width}
                height={props.height}
                alt={props.altText}/>;
}

function BlogItem(props) {
  const {imageProps, spanText} = props
  return <div>
      <Image src={imageProps.src} width={imageProps.width} height={imageProps.height} alt={imageProps.altText}/>
      <br/>
      <TextBox text={spanText.text}/>
    </div>
}

class BlogContainer extends React.Component {
  constructor(props) {
    super(props);    
    this.state = { blogs };
  }
  
  render() {
    const { blogs } = this.state;
    return React.createElement(BlogList, { blogs });
  }
}

const BlogList = ({ blogs }) => {
  return DOM.ul(
      null,
      _.map(
        blogs,
        (blog, key) => (
          <BlogItem key={key} imageProps={blog.imageProps} spanText={blog.spanText}/>
        )
      )
    )
}

ReactDOM.render(
  React.createElement(BlogContainer),
  document.getElementById('app')
)


//----------------------- please do litter below ----------------------------------------------
//DOM.li({key}, blog.spanText.text)
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

/*
  
  function BlogList(props) {
  const {imageProps, spanText} = props[0]
  return <div>123</div>
    //<BlogItem imageProps={imageProps} spanText={spanText}/>
  
}
  
  const blogElements = props.map(
    (item, key) => {
      //const {imageProps, spanText} = item
      //<li key='123'>
      //<BlogItem key={key} imageProps={item.imageProps} spanText={item.spanText}/>
        <div>blah</div>
      //</li>
    }
  return (
        <ul>
            {blogElements}
        </ul>
    )
  */
  
  /*
  const {imageProps, spanText} = props[0]
  
  return (
    <ul>
      //_.map(
      //  props,
      //  (item) => (
          //const {imageProps, spanText} = item
          <li key="123"><BlogItem imageProps={imageProps} spanText={spanText}/></li>
      //  )
      //)
    </ul>
  )*/
  
  //const {imageProps, spanText} = props[0]
  //return <BlogItem imageProps={imageProps} spanText={spanText}/>
  
  //const {imageProps, spanText} = props
  //return <div>{imageProps.height}</div>
  
  //return <div>'123'</div>
//}

/*
function BlogList5(props) {
  //const {blogItems} = props
  const blogElements = props.map(
    (prop) => {
      const {imageProps, spanText} = prop
      <li>
        <BlogItem imageProps={imageProps} spanText={spanText}/>
      </li>
    }
  )
  return (
    <ul>
      {blogElements}
    </ul>
  )
}
*/


