import { Link } from 'react-router-dom';
import './players.css';
import { useState } from 'react';
function Players()
{
    let [playerrOne,setPlayerOne]=useState("");
    let [playerrTwo,setPlayerTwo]=useState("");
    function goToPlay(e)
    {
        

        let flag=false;
        // egt the input one value:
        const playerTwo=document.querySelector(".two").value;
        console.log("the playerTwo",playerTwo);
        const playerOne=document.querySelector(".one").value;
        let button=document.querySelector(".jk");
        console.log("the player one",playerOne);
        if(playerTwo&&playerOne)
        {
            flag=true;
        }
        if(flag)
        {
            setPlayerOne(playerOne);
            setPlayerTwo(playerTwo);
            button.classList.remove("d-none");
            button.classList.add("d-block");
        }
        else
        {
            button.classList.add("d-none");
            button.classList.remove("d-block");
        }
    }
    return <>
        <div className="row justify-content-center justify-content-md-between  align-content-center  w-100  text-ligth min-vh-100 vh-md-100">
         <h1 className='col-12 mb-5 pb-5 text-center w-100 text-light my-4'>please enter the namses of the players:</h1>
            <div className="col-12 col-md-5 my-5 my-md-0  playerOne d-flex flex-column justify-content-around align-items-center align-content-center h-75 text-light">
            <i class="fa-solid fa-user  fw-bolder "></i>
            <h2 className='fs-1 fw-bolder'>player 1 (x):</h2>
            <input type="text" className="form-control fs-2 fw-bolder one text-center" onKeyUp={goToPlay}></input>
            </div>
            <div className="col-12 col-md-5 my-5 my-md-0 playerTwo d-flex flex-column justify-content-around align-items-center align-content-center h-75 text-light">
            <i class="fa-solid fa-user  fw-bolder fw-bolder"></i>
            <h2 className='fs-1 fw-bolder'>player 2 (o):</h2>
            <input type="text" className="form-control fs-2 fw-bolder two text-center" onKeyUp={goToPlay}></input>
            </div>
            <div className='col-12 text-center mt-2 mt-md-5 w-100 d-flex flex-row justify-content-center align-content-center jk d-none mb-3'>
            <Link to={`/${playerrOne}/${playerrTwo}`} className='text-decoration-none  text-light bg-danger w-75 d-flex flex-row justify-content-center align-items-center align-content-center fs-3 fw-bolder'>Play Now</Link> 
            </div>
        </div>
    </>
}
export default Players;