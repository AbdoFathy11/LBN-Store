import "./pro.css";
import phone1 from "./images/phone1.jpg"
import phone2 from "./images/phone2.jpg"
import phone3 from "./images/phone3.jpg"
import phone4 from "./images/phone4.jpg"
import phone5 from "./images/phone5.jpg"
import phone6 from "./images/phone6.jpg"
import phone7 from "./images/phone7.jpg"
import {BsFillStarFill} from 'react-icons/bs'
import {AiFillHeart} from 'react-icons/ai'
import {AiOutlineStar} from 'react-icons/ai'
import { useState, useEffect } from "react";
const Stars = ({rate}) => {
    const [stars, setStars] = useState([]);
  
    const setStarss = () => {
      const starss = [];
      for (let i = 1; i <= rate; i++) {
        starss.push(<span key={i}><BsFillStarFill /></span>);
      }
      if (rate < 5) {
        for (let i = 1, n = 5 - rate; i <= n; i++) {
            starss.push(<span key={i}><AiOutlineStar /></span>);
          }
      }
      setStars(starss);
    };
  
    useEffect(() => {
      setStarss();
    }, []);
  
    return <div className="stars">{stars}</div>;
  };
  
function Product({
    img,
    heading,
    price,
    rate,
    description,
    id
}) {
    return (
<div className="pro">
    <div className="img">
    <img src={img} alt="phone"/>
    </div>
    <div className="heart">
        <AiFillHeart/>
    </div>
    <div className="details">
        <p>{heading}</p>
        <p>{price}$</p>
    </div>
    <div className="description">
        <p>{description}</p>
    </div>
    <Stars rate={rate}/>
    <div>
        <button className="btn" id={`btn${id}`}>ADD Card </button>
    </div>
</div>
    )
}

export default function Products(){
return(
    <section className="section-products">
    <h2 className="h2">phone for you</h2>
<div className='container'>
<Product 
    img={phone1}
    heading="samsong s20"
    price ="2500"
    rate = {1}
    description = "nice phone"
    id = {0}
/>
<div className="pro">

<div className="img">
<img src={phone1} alt="phone"/>
</div>

<div className="heart">
    <AiFillHeart/>
    </div>

<div className="details">
    <p>samsong s20</p>
    <p>2500$</p>
</div>
<div className="stars">

<span><BsFillStarFill/></span>
<span><BsFillStarFill/></span>
<span><BsFillStarFill/></span>
<span><BsFillStarFill/></span>
<span><BsFillStarFill/></span>

</div>

<div>
    <button className="btn">ADD Card </button>
</div>
    
</div>


<div className="pro">

<div className="img">
<img src={phone2} alt="phone"/>
</div>
<div className="heart">
    <AiFillHeart/>
    </div>

<div className="details">
    <p>vivo s20</p>
    <p>1700$</p>
</div>

<div className="stars">

<span><BsFillStarFill/></span>
<span><BsFillStarFill/></span>
<span><BsFillStarFill/></span>
<span><BsFillStarFill/></span>

</div>

<div>
    <button className="btn">ADD Card </button>
    </div>


</div>




<div className="pro">

<div className="img">
<img src={phone3} alt="phone"/>
</div>

<div className="heart">
    <AiFillHeart/>
    </div>

<div className="details">
    <p>iphone s5</p>
    <p>5500$</p>
</div>

<div className="stars">

<span><BsFillStarFill/></span>
<span><BsFillStarFill/></span>
<span><BsFillStarFill/></span>
<span><BsFillStarFill/></span>
<span><BsFillStarFill/></span>

</div>

<div>
    <button className="btn">ADD Card </button>
    </div>


</div>






<div className="pro">

<div className="img">
<img src={phone4} alt="phone"/>
</div>
<div className="heart">
    <AiFillHeart/>
    </div>

<div className="details">
    <p> vivo s20</p>
    <p>4500$</p>
</div>

<div className="stars">

<span><BsFillStarFill/></span>
<span><BsFillStarFill/></span>
<span><BsFillStarFill/></span>
<span><BsFillStarFill/></span>
<span><BsFillStarFill/></span>

</div>

<div>
    <button className="btn">ADD Card </button>
    </div>


</div>

<div className="pro">

<div className="img">
<img src={phone5} alt="phone"/>
</div>
<div className="heart">
    <AiFillHeart/>
    </div>

<div className="details">
    <p>oppo s20</p>
    <p>7500$</p>
</div>

<div className="stars">

<span><BsFillStarFill/></span>
<span><BsFillStarFill/></span>

</div>

<div>
    <button className="btn">ADD Card </button>
    </div>


</div>

<div className="pro">

<div className="img">
<img src={phone6} alt="phone"/>
</div>
<div className="heart">
    <AiFillHeart/>
    </div>

<div className="details">
    <p>oppo s20</p>
    <p>7500$</p>
</div>

<div className="stars">

<span><BsFillStarFill/></span>
<span><BsFillStarFill/></span>

</div>

<div>
    <button className="btn">ADD Card </button>
    </div>


</div>

<div className="pro">

<div className="img">
<img src={phone7} alt="phone"/>
</div>
<div className="heart">
    <AiFillHeart/>
    </div>

<div className="details">
    <p>oppo s20</p>
    <p>7500$</p>
</div>

<div className="stars">

<span><BsFillStarFill/></span>
<span><BsFillStarFill/></span>

</div>

<div>
    <button className="btn">ADD Card </button>
    </div>


</div>

<div className="pro">

<div className="img">
<img src={phone7} alt="phone"/>
</div>
<div className="heart">
    <AiFillHeart/>
    </div>

<div className="details">
    <p>oppo s20</p>
    <p>7500$</p>
</div>

<div className="stars">

<span><BsFillStarFill/></span>
<span><BsFillStarFill/></span>

</div>

<div>
    <button className="btn">ADD Card </button>
    </div>


</div>

<div className="pro">

<div className="img">
<img src={phone7} alt="phone"/>
</div>
<div className="heart">
    <AiFillHeart/>
    </div>

<div className="details">
    <p>oppo s20</p>
    <p>7500$</p>
</div>

<div className="stars">

<span><BsFillStarFill/></span>
<span><BsFillStarFill/></span>

</div>

<div>
    <button className="btn">ADD Card </button>
    </div>


</div>

<div className="pro">

<div className="img">
<img src={phone7} alt="phone"/>
</div>
<div className="heart">
    <AiFillHeart/>
    </div>

<div className="details">
    <p>oppo s20</p>
    <p>7500$</p>
</div>

<div className="stars">

<span><BsFillStarFill/></span>
<span><BsFillStarFill/></span>

</div>

<div>
    <button className="btn">ADD Card </button>
    </div>


</div>

<div className="pro">

<div className="img">
<img src={phone7} alt="phone"/>
</div>
<div className="heart">
    <AiFillHeart/>
    </div>

<div className="details">
    <p>oppo s20</p>
    <p>7500$</p>
</div>

<div className="stars">

<span><BsFillStarFill/></span>
<span><BsFillStarFill/></span>

</div>

<div>
    <button className="btn">ADD Card </button>
    </div>


</div>

<div className="pro">

<div className="img">
<img src={phone7} alt="phone"/>
</div>
<div className="heart">
    <AiFillHeart/>
    </div>

<div className="details">
    <p>oppo s20</p>
    <p>7500$</p>
</div>

<div className="stars">

<span><BsFillStarFill/></span>
<span><BsFillStarFill/></span>

</div>

<div>
    <button className="btn">ADD Card </button>
    </div>


</div>

</div>

</section>
)
}