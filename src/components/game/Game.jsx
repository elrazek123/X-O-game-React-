import { useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import './game.css';
function Gaming()
{
    const {playerOne,playerTwo}=useParams();
    let [resultPlyerOne,setResultPLyerOne]=useState(0);
    let [resultPlyerTwo,setResultPlyerTwo]=useState(0);
    const [resultSentence,setResultSentence]=useState("");
    const [sentence,setSentence]=useState(`${playerOne} (x) will play now`);
    const [show,setShow]=useState(false);
    function makeMovement(e)
    {
        if(e.target.innerHTML!="")
        {
            console.log("couldn't changet the movement");
            return;
        }
        else
        {
            if(sentence.startsWith(`${playerOne}`))
            {
                e.target.innerHTML="x";
            }
            else
            {
                e.target.innerHTML="o";
            }
        }
        const result=checkWhoAreWin(e);
        if(result=="the draw is maked")
        {
            console.log("the draw is maked");
        }
        else
        {
            console.log("no draw");
            if(sentence.startsWith(`${playerOne}`))
                {
                  
                      setSentence(`${playerTwo} (o) will play now`)
                }
                else
                {
                       setSentence(`${playerOne} (x) will play now`)
                }
        }
   
    }
    function checkIfItFIlledAndDraw(StateOfWin)
    {
        // check if all the boxes are return true or false:
        let allElmentsOfBoxes=document.querySelectorAll(".box");
        // check if it all filled box:
        let state=true;
        allElmentsOfBoxes.forEach((ele)=>
        {
            if(ele.innerHTML=="")
            {
                state=false;
            }
        });
        if(state)
        {
            if(StateOfWin==false)
            {
                setSentence("draw there is no one win these game");
                setResultSentence("draw there is no one win these game");
                window.setTimeout(()=>
                {
                    setSentence(`${playerOne} (x) will play now`);
                    allElmentsOfBoxes.forEach((ele)=>
                    {
                        ele.innerHTML="";
                        setShow(true);
                    })
                },3000)
            }
            return "all boxes are filled";
        }
        return "not all are filled";
    }
    function winScenario(arrayOfBoxes,userWhoIsWin)
    {
        let boxes=document.querySelectorAll(".box");
        console.log("make the win scenario now");
        boxes.forEach((ele,index)=>
        {
            if(arrayOfBoxes.includes(index))
            {
                ele.classList.remove("bg-light");
                ele.classList.add("bg-success");
            }
            else
            {
                ele.innerHTML="-";
                console.log("no there is no one here");
            }
        });
      
    
        if(userWhoIsWin==playerOne)
        {
            setResultPLyerOne(resultPlyerOne+1);
            setResultSentence(`${userWhoIsWin} (x)  win this game`);
        }
        else
        {
            setResultPlyerTwo(resultPlyerTwo+1);
            setResultSentence(`${userWhoIsWin} (o) win this game`);
        }
        window.setTimeout(()=>
        {
            setShow(true);
        },1300)
    }
    function checkWhoAreWin(e)
    {
        // check the probalilities of all things:
        const getOrder=e.target.getAttribute("order");
        console.log(getOrder);
        const getWhatWeStartsWith=sentence.split(" ")[1][1];
        console.log(getWhatWeStartsWith);
        let allBoxes=document.querySelectorAll(".box");
        let index=+e.target.getAttribute("index");
        let player="";
        if(getWhatWeStartsWith=="x")
        {
            player=playerOne;
        }
        else
        {
            player=playerTwo;
        }
        switch (getOrder)
        {
            case "one":
                {
                    let state=false;   
                    // make the logic for the order one:
                    console.log("")
                    if(e.target.innerHTML==getWhatWeStartsWith&&allBoxes[1].innerHTML==getWhatWeStartsWith&&allBoxes[2].innerHTML==getWhatWeStartsWith)
                    {
                        // win process:
                        state=true;
                        let arrayOfBoxes=[index,1,2];
                        winScenario(arrayOfBoxes,player);
                    }
                    else if(e.target.innerHTML==getWhatWeStartsWith&&allBoxes[4].innerHTML==getWhatWeStartsWith&&allBoxes[8].innerHTML==getWhatWeStartsWith)
                    {
                        state=true;
                        let arrayOfBoxes=[index,4,8];
                        winScenario(arrayOfBoxes,player);
                    }
                    else if(e.target.innerHTML==getWhatWeStartsWith&&allBoxes[3].innerHTML==getWhatWeStartsWith&&allBoxes[6].innerHTML==getWhatWeStartsWith)
                    {
                        state=true;
                        let arrayOfBoxes=[index,3,6];
                        winScenario(arrayOfBoxes,player);
                    }
                    else
                    {
                        // check on the draw please:
                        state=false;
                        const  afterCheck=checkIfItFIlledAndDraw(state);
                        if(afterCheck=="all boxes are filled")
                        {
                            console.log("yes");
                            return "the draw is maked";
                        }
                        else
                        {
                            return "continue it's ordinary"
                        }
                    }
                    break;
                }
            case "two":
                {
                    let state=false;   
                    // make the logic for the order one:
                    console.log("")
                    if(e.target.innerHTML==getWhatWeStartsWith&&allBoxes[0].innerHTML==getWhatWeStartsWith&&allBoxes[2].innerHTML==getWhatWeStartsWith)
                    {
                        // win process:
                        state=true;
                        let arrayOfBoxes=[index,0,2];
                        winScenario(arrayOfBoxes,player);
                    }
                    else if(e.target.innerHTML==getWhatWeStartsWith&&allBoxes[4].innerHTML==getWhatWeStartsWith&&allBoxes[7].innerHTML==getWhatWeStartsWith)
                    {
                        state=true;
                        let arrayOfBoxes=[index,4,7];
                        winScenario(arrayOfBoxes,player);
                    }
                    else
                    {
                        // check on the draw please:
                        state=false;
                        const  afterCheck=checkIfItFIlledAndDraw(state);
                        if(afterCheck=="all boxes are filled")
                        {
                            console.log("yes");
                            return "the draw is maked";
                        }
                        else
                        {
                            return "continue it's ordinary"
                        }
                    }
                    break;
                }
            case "three":
                {
                    let state=false;   
                    // make the logic for the order one:
                    console.log("")
                    if(e.target.innerHTML==getWhatWeStartsWith&&allBoxes[5].innerHTML==getWhatWeStartsWith&&allBoxes[8].innerHTML==getWhatWeStartsWith)
                    {
                        // win process:
                        state=true;
                        let arrayOfBoxes=[index,5,8];
                        winScenario(arrayOfBoxes,player);
                    }
                    else if(e.target.innerHTML==getWhatWeStartsWith&&allBoxes[0].innerHTML==getWhatWeStartsWith&&allBoxes[1].innerHTML==getWhatWeStartsWith)
                    {
                        state=true;
                        let arrayOfBoxes=[index,0,1];
                        winScenario(arrayOfBoxes,player);
                    }
                    else if(e.target.innerHTML==getWhatWeStartsWith&&allBoxes[4].innerHTML==getWhatWeStartsWith&&allBoxes[6].innerHTML==getWhatWeStartsWith)
                    {
                        state=true;
                        let arrayOfBoxes=[index,4,6];
                        winScenario(arrayOfBoxes,player);
                    }
                    else
                    {
                        // check on the draw please:
                        state=false;
                        const  afterCheck=checkIfItFIlledAndDraw(state);
                        if(afterCheck=="all boxes are filled")
                        {
                            console.log("yes");
                            return "the draw is maked";
                        }
                        else
                        {
                            return "continue it's ordinary"
                        }
                    }
                    break;
                }
            case "four":
                {
                    let state=false;   
                    // make the logic for the order one:
                    console.log("")
                    if(e.target.innerHTML==getWhatWeStartsWith&&allBoxes[0].innerHTML==getWhatWeStartsWith&&allBoxes[6].innerHTML==getWhatWeStartsWith)
                    {
                        // win process:
                        state=true;
                        let arrayOfBoxes=[index,0,6];
                        winScenario(arrayOfBoxes,player);
                    }
                    else if(e.target.innerHTML==getWhatWeStartsWith&&allBoxes[4].innerHTML==getWhatWeStartsWith&&allBoxes[5].innerHTML==getWhatWeStartsWith)
                    {
                        state=true;
                        let arrayOfBoxes=[index,4,5];
                        winScenario(arrayOfBoxes,player);
                    }
                    else
                    {
                        // check on the draw please:
                        state=false;
                        const  afterCheck=checkIfItFIlledAndDraw(state);
                        if(afterCheck=="all boxes are filled")
                        {
                            console.log("yes");
                            return "the draw is maked";
                        }
                        else
                        {
                            return "continue it's ordinary"
                        }
                    }
                    break;
                }
            case "five":
                {
                    let state=false;   
                    // make the logic for the order one:
                    console.log("")
                    if(e.target.innerHTML==getWhatWeStartsWith&&allBoxes[3].innerHTML==getWhatWeStartsWith&&allBoxes[5].innerHTML==getWhatWeStartsWith)
                    {
                        // win process:
                        state=true;
                        let arrayOfBoxes=[index,3,5];
                        winScenario(arrayOfBoxes,player);
                    }
                    else if(e.target.innerHTML==getWhatWeStartsWith&&allBoxes[1].innerHTML==getWhatWeStartsWith&&allBoxes[7].innerHTML==getWhatWeStartsWith)
                    {
                        state=true;
                        let arrayOfBoxes=[index,1,7];
                        winScenario(arrayOfBoxes,player);
                    }
                    else if(e.target.innerHTML==getWhatWeStartsWith&&allBoxes[0].innerHTML==getWhatWeStartsWith&&allBoxes[8].innerHTML==getWhatWeStartsWith)
                    {
                        state=true;
                        let arrayOfBoxes=[index,0,8];
                        winScenario(arrayOfBoxes,player);
                    }
                    else
                    {
                        // check on the draw please:
                        state=false;
                        const  afterCheck=checkIfItFIlledAndDraw(state);
                        if(afterCheck=="all boxes are filled")
                        {
                            console.log("yes");
                            return "the draw is maked";
                        }
                        else
                        {
                            return "continue it's ordinary"
                        }
                    }
                    break;
                }
            case "sex":
                {
                    let state=false;   
                    // make the logic for the order one:
                    console.log("")
                    if(e.target.innerHTML==getWhatWeStartsWith&&allBoxes[2].innerHTML==getWhatWeStartsWith&&allBoxes[8].innerHTML==getWhatWeStartsWith)
                    {
                        // win process:
                        state=true;
                        let arrayOfBoxes=[index,2,8];
                        winScenario(arrayOfBoxes,player);
                    }
                    else if(e.target.innerHTML==getWhatWeStartsWith&&allBoxes[3].innerHTML==getWhatWeStartsWith&&allBoxes[4].innerHTML==getWhatWeStartsWith)
                    {
                        state=true;
                        let arrayOfBoxes=[index,3,4];
                        winScenario(arrayOfBoxes,player);
                    }
                    else
                    {
                        // check on the draw please:
                        state=false;
                        const  afterCheck=checkIfItFIlledAndDraw(state);
                        if(afterCheck=="all boxes are filled")
                        {
                            console.log("yes");
                            return "the draw is maked";
                        }
                        else
                        {
                            return "continue it's ordinary"
                        }
                    }
                    break;
                }
            case "seven":
                {
                    let state=false;   
                    // make the logic for the order one:
                    console.log("")
                    if(e.target.innerHTML==getWhatWeStartsWith&&allBoxes[0].innerHTML==getWhatWeStartsWith&&allBoxes[3].innerHTML==getWhatWeStartsWith)
                    {
                        // win process:
                        state=true;
                        let arrayOfBoxes=[index,0,3];
                        winScenario(arrayOfBoxes,player);
                    }
                    else if(e.target.innerHTML==getWhatWeStartsWith&&allBoxes[2].innerHTML==getWhatWeStartsWith&&allBoxes[4].innerHTML==getWhatWeStartsWith)
                    {
                        state=true;
                        let arrayOfBoxes=[index,2,4];
                        winScenario(arrayOfBoxes,player);
                    }
                    else if(e.target.innerHTML==getWhatWeStartsWith&&allBoxes[7].innerHTML==getWhatWeStartsWith&&allBoxes[8].innerHTML==getWhatWeStartsWith)
                    {
                        state=true;
                        let arrayOfBoxes=[index,7,8];
                        winScenario(arrayOfBoxes,player);
                    }
                    else
                    {
                        // check on the draw please:
                        state=false;
                        const  afterCheck=checkIfItFIlledAndDraw(state);
                        if(afterCheck=="all boxes are filled")
                        {
                            console.log("yes");
                            return "the draw is maked";
                        }
                        else
                        {
                            return "continue it's ordinary"
                        }
                    }
                    break;
                }   
            case "eight":
                {
                    let state=false;   
                    // make the logic for the order one:
                    console.log("")
                    if(e.target.innerHTML==getWhatWeStartsWith&&allBoxes[1].innerHTML==getWhatWeStartsWith&&allBoxes[4].innerHTML==getWhatWeStartsWith)
                    {
                        // win process:
                        state=true;
                        let arrayOfBoxes=[index,1,4];
                        winScenario(arrayOfBoxes,player);
                    }
                    else if(e.target.innerHTML==getWhatWeStartsWith&&allBoxes[6].innerHTML==getWhatWeStartsWith&&allBoxes[8].innerHTML==getWhatWeStartsWith)
                    {
                        state=true;
                        let arrayOfBoxes=[index,6,8];
                        winScenario(arrayOfBoxes,player);
                    }
                    else
                    {
                        // check on the draw please:
                        state=false;
                        const  afterCheck=checkIfItFIlledAndDraw(state);
                        if(afterCheck=="all boxes are filled")
                        {
                            console.log("yes");
                            return "the draw is maked";
                        }
                        else
                        {
                            return "continue it's ordinary"
                        }
                    }
                    break;
                }
            case "nine":
                {
                    let state=false;   
                    // make the logic for the order one:
                    console.log("")
                    if(e.target.innerHTML==getWhatWeStartsWith&&allBoxes[0].innerHTML==getWhatWeStartsWith&&allBoxes[4].innerHTML==getWhatWeStartsWith)
                    {
                        // win process:
                        state=true;
                        let arrayOfBoxes=[index,0,4];
                        winScenario(arrayOfBoxes,player);
                    }
                    else if(e.target.innerHTML==getWhatWeStartsWith&&allBoxes[6].innerHTML==getWhatWeStartsWith&&allBoxes[7].innerHTML==getWhatWeStartsWith)
                    {
                        state=true;
                        let arrayOfBoxes=[index,6,7];
                        winScenario(arrayOfBoxes,player);
                    }
                    else if(e.target.innerHTML==getWhatWeStartsWith&&allBoxes[2].innerHTML==getWhatWeStartsWith&&allBoxes[5].innerHTML==getWhatWeStartsWith)
                    {
                        state=true;
                        let arrayOfBoxes=[index,2,5];
                        winScenario(arrayOfBoxes,player);
                    }
                    else
                    {
                        // check on the draw please:
                        state=false;
                        const  afterCheck=checkIfItFIlledAndDraw(state);
                        if(afterCheck=="all boxes are filled")
                        {
                            console.log("yes");
                            return "the draw is maked";
                        }
                        else
                        {
                            return "continue it's ordinary"
                        }
                    }
                    break;
                }   
            default:
                {
                    console.log("thre is no one to make it")
                }              
        }

    }
    return <>
    <div className="row   text-white vh-md-100 min-vh-md-100 ">
    {show?<div className="modal fade show d-block" tabIndex="-1" role="dialog" style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}>
          <div className="modal-dialog  bg-primary text-light" role="document">
            <div className="modal-content bg-primary text-light">
              <div className="modal-header bg-primary text-light">
                <h5 className="modal-title"></h5>
               
              </div>
              <div className="modal-body bg-primary text-light">
                <h3>{resultSentence}</h3>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-danger" onClick={()=>
                {
                    console.log("yes");
                    window.open("/")
                }}>
                  back?
                </button>
                <button
                  type="button"
                  className="btn btn-success"
                  onClick={() => {
                   let allBoxes=document.querySelectorAll(".box");
                   for(let i=0;i<allBoxes.length;i++)
                   {
                    allBoxes[i].classList.add("bg-light");
                    allBoxes[i].classList.remove("bg-success");
                    allBoxes[i].innerHTML="";
                    setShow(false);
                    setSentence(`${playerOne} (x) will play now`);
                   }
                  }}
                >
                  play again
                </button>
              </div>
            </div>
          </div>
        </div>:""}
    <div className="col-12 text-center my-3">
    <h1>players:</h1>
    </div>
    <div className="playerOne col-12 col-md-5 d-flex flex-column flex-wrap  justify-content-around align-content-center align-items-center">
    <h2>{playerOne}</h2>
    <h1>{resultPlyerOne}</h1>
    </div>
    <div className="vs-word col-12 col-md-2 d-flex flex-column justify-content-around align-content-center align-items-center">
    <h1 className="fs-1 fw-bolder ">VS</h1>
    </div>
    <div className="playerTwo col-12 col-md-5 d-flex flex-column justify-content-around align-content-center align-items-center">
    <h2>{playerTwo}</h2>
    <h1>{resultPlyerTwo}</h1>
    </div>
    </div>
    <div className="row justify-content-center align-content-center align-items-center  mt-5 mb-3">
    <h2 className='col-12 fs-2 fw-bolder text-center text-light bg-danger p-3'>{sentence}</h2>
    </div>
    <div className="w-100 d-flex flex-row justify-content-center align-items-center align-content-center">
    <div className="x-o-squares row w-75 justify-content-between align-content-between">
    <div className="col-3 mx-2 my-2 bg-light text-primary d-flex flex-row justify-content-center align-items-center align-content-center fs-1 fw-bolder box" onClick={makeMovement} order="one" index="0">
    </div>
    <div className="col-3 mx-2 my-2 bg-light text-primary d-flex flex-row justify-content-center align-items-center align-content-center fs-1 fw-bolder box" onClick={makeMovement} order="two" index="1">
    </div>
    <div className="col-3 mx-2 my-2 bg-light text-primary d-flex flex-row justify-content-center align-items-center align-content-center fs-1 fw-bolder box" onClick={makeMovement} order="three" index="2">
    </div>
    <div className="col-3 mx-2 my-2 bg-light text-primary d-flex flex-row justify-content-center align-items-center align-content-center fs-1 fw-bolder box" onClick={makeMovement} order="four" index="3">
    </div>
    <div className="col-3 mx-2 my-2 bg-light text-primary d-flex flex-row justify-content-center align-items-center align-content-center fs-1 fw-bolder box" onClick={makeMovement} order="five" index="4">
    </div>
    <div className="col-3 mx-2 my-2 bg-light text-primary d-flex flex-row justify-content-center align-items-center align-content-center fs-1 fw-bolder box" onClick={makeMovement} order="sex" index="5">
    </div>
    <div className="col-3 mx-2 my-2 bg-light text-primary d-flex flex-row justify-content-center align-items-center align-content-center fs-1 fw-bolder box" onClick={makeMovement} order="seven" index="6">
    </div>
    <div className="col-3 mx-2 my-2 bg-light text-primary d-flex flex-row justify-content-center align-items-center align-content-center fs-1 fw-bolder box" onClick={makeMovement} order="eight" index="7">
    </div>
    <div className="col-3 mx-2 my-2 bg-light text-primary d-flex flex-row justify-content-center align-items-center align-content-center fs-1 fw-bolder box" onClick={makeMovement} order="nine" index="8">
    </div>
    </div>

    </div>
    </>
}
export default Gaming;