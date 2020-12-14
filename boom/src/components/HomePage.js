import React, { useEffect, useState } from "react";
import firebaseDB from "../firebase"
import 'react-slideshow-image/dist/styles.css'
import { Slide } from 'react-slideshow-image';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Title from "./Title";


 const HomePage = () => { 
    var [categoryObjects,setCategoriesObjects] = useState({})
    var [menuObjects,setMenuObjects] = useState({})
    var [menu1Objects,setMenu1Objects] = useState({})

    useEffect(()=>{
         firebaseDB.child('categories').on('value',snapshot=>{
             if(snapshot.val() != null)
            setCategoriesObjects({
                ...snapshot.val()
            })
        })
        firebaseDB.child('menu').on('value',snapshot=>{
            if(snapshot.val() != null)
            setMenuObjects({
               ...snapshot.val()
            })
        })
    },[])


    
   
  
     const slideImages = [
        'https://hhsbanner.com/wp-content/uploads/2019/03/victoria_falls-900x300.jpg',
        'https://blog.cognifit.com/wp-content/uploads/2019/11/hiking-900x300.jpg',
        'https://travelfree.info/wp-content/uploads/2018/02/croatia-waterfall-in-deep-forest-of-Cr-12755165-900x300.jpg'
      ];

      const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
      var v1 ="Arun";

      const mystyle = {

        padding: "10px",
        height: "600px",
      };
      
    return ( 
        <>
        <div>
        <Slide easing="ease">
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[0]})`}}>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[1]})`}}>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[2]})`}}>
            </div>
          </div>
        </Slide>
      </div>
      <div className="py-5">
           <div className="container">
                <Title name="Top Fashion Styles" title=""></Title >
           </div>
       </div>
      <Carousel responsive={responsive}>
        {
            Object.keys(categoryObjects).map(id=>{
                console.log("cat :- "+categoryObjects[id].pro1)
                return <div>
                <div className="card" style={mystyle}>
                    <img src={categoryObjects[id].pro} className="card-img-top" alt={id} />
                    <div className="mx-auto">
                        <a href="#"  className="badge text-center text-wrap">{categoryObjects[id].pro1}</a>
                    </div>
                </div>
            </div>
            })
        }
        </Carousel>

<Carousel responsive={responsive}>
        <div>
            <div class="card">
                <img src="https://images.unsplash.com/uploads/1411724908903377d4696/2e9b0cb2?crop=entropy&fit=crop&fm=jpg&h=675&ixjsv=2.1.0&ixlib=rb-0.3.5&q=80&w=1000" class="card-img-top" alt="..." />
                    <div class="card-body">
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
            </div>
        </div>
        <div>
            <div class="card">
                <img src="https://images.unsplash.com/uploads/1411724908903377d4696/2e9b0cb2?crop=entropy&fit=crop&fm=jpg&h=675&ixjsv=2.1.0&ixlib=rb-0.3.5&q=80&w=1000" class="card-img-top" alt="..." />
                    <div class="card-body">
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
            </div>
        </div>
        <div>
            <div class="card">
                <img src="https://images.unsplash.com/uploads/1411724908903377d4696/2e9b0cb2?crop=entropy&fit=crop&fm=jpg&h=675&ixjsv=2.1.0&ixlib=rb-0.3.5&q=80&w=1000" class="card-img-top" alt="..." />
                    <div class="card-body">
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
            </div>
        </div>
        <div>
            <div class="card">
                <img src="https://images.unsplash.com/uploads/1411724908903377d4696/2e9b0cb2?crop=entropy&fit=crop&fm=jpg&h=675&ixjsv=2.1.0&ixlib=rb-0.3.5&q=80&w=1000" class="card-img-top" alt="..." />
                    <div class="card-body">
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
            </div>
        </div>
        <div>
            <div class="card">
                <img src="https://images.unsplash.com/uploads/1411724908903377d4696/2e9b0cb2?crop=entropy&fit=crop&fm=jpg&h=675&ixjsv=2.1.0&ixlib=rb-0.3.5&q=80&w=1000" class="card-img-top" alt="..." />
                    <div class="card-body">
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
            </div>
        </div>
        <div>
            <div class="card">
                <img src="https://images.unsplash.com/uploads/1411724908903377d4696/2e9b0cb2?crop=entropy&fit=crop&fm=jpg&h=675&ixjsv=2.1.0&ixlib=rb-0.3.5&q=80&w=1000" class="card-img-top" alt="..." />
                    <div class="card-body">
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
            </div>
        </div>
        <div>
            <div class="card">
                <img src="https://images.unsplash.com/uploads/1411724908903377d4696/2e9b0cb2?crop=entropy&fit=crop&fm=jpg&h=675&ixjsv=2.1.0&ixlib=rb-0.3.5&q=80&w=1000" class="card-img-top" alt="..." />
                    <div class="card-body">
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
            </div>
        </div>
</Carousel>



{
            Object.keys(categoryObjects).map(id2=>{
                var ref = firebaseDB.child("menu");
                var v2 = ref.orderByChild("dname").equalTo(categoryObjects[id2].pro1);
                let ItemList = [];
                v2.once("value", function(snapshot) {
                    snapshot.forEach(function(child) {
                        ItemList.push(child);
                    })
                  })
                return[<Carousel swipeable={true} draggable={true} key = {id2} arrows={true} responsive={responsive}> {
                    Object.keys(ItemList).map(id1=>{  
                        return <div> <div key ={ItemList[id1].key} class="card">
                        <img src={ItemList[id1].val().one} class="card-img-top" alt={id1} />
                            <div class="card-body">
                            <p class="card-text">{ItemList[id1].val().dname}</p>
                            </div>
                        </div></div>
           })
           
            }</Carousel> 
        ]
            })
        }
        </>
    ); 
}

export default HomePage;