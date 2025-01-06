import React from 'react';
import {florence} from "./dataStory";

export const MeaningWords = () => {
  return (
    <>
        <section className=" mt-3 f-right">
            <div className="row">
                <div className="col-md-6 ">
                <div className="container">
                    {/* <!-- ******************* --> */}
                    <div
                    className="table-responsive"
                    >
                    <table
                        className="table table-primary"
                    >
                        <thead>
                        <tr>
                            <th scope="col">مترادف ها</th>
                        </tr>
                        </thead>
                        <tbody>
                            <tr className="">
                            {florence.wordPart.map((item,index)=>{
                                const putWord=()=>{
                                    document.querySelector(`#${florence.wordId}`).innerHTML=`
                                        <div  class=' my-5 text-center'>
                                            <h1 class ="py-5 text-purple">${item.engMean}</h1>
                                        </div>
                                    ` 
                                }
                                return(
                                    <>
                                        <td key={index} className="btn-group sentence_alpha" role="group" aria-label="Basic example">
                                        <button type="button" className="btn-lg btn-info  text-dark " onClick={putWord}>{item.wordMean}</button>
                                        </td>
                                    </>
                                )
                            })}
                            </tr>
                        </tbody>
                    </table>
                    </div>
                    {/* <!-- *************** --> */}
                </div>
                </div>
                <div className="col-md-6 bg-warning rounded py-10" id={florence.wordId}></div>
            </div>
                <br /><br /><br /><br /><br />
        </section>

    </>
  )
}
