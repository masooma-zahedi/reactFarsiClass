import React from 'react';

export const SylabeWords = (props) => {
  return (
    <>
        <section id='read1' className=" f-right mt-4">
            <div className="d-flex  ">
                <div className=" flex-fill">
                    <div className="ms-3">
                    {/* <!-- ******************* --> */}
                    <div
                        className="table-responsive"
                    >
                        <table
                        className="table"
                        >
                        <thead>
                            <tr className=''>
                            <th className="h3 bg-secondary p-4 text-center rounded text-light p-2" scope="col">{props.infoSentence.titleHead}</th>
                            </tr>
                        </thead>
                        <tbody>
                            {props.infoSentence.sentenceRow.map((sentence,index)=>{
                                return(
                                    <>
                                        <tr style={{backgroundColor:"#ddddff"}} className="h1 " key={index}>
                                        <td className="btn-group sentence_alpha " role="group" aria-label="Basic example">
                                            {sentence.map((item,index)=>{
                                                const putWord = ()=>{
                                                    let target = props.infoSentence.buttonTargetId
                                                    console.log(target);
                                                    document.querySelector(`#${target}`).innerHTML=`
                                                        <h1>${item.syla=="" ? item.word : item.syla}</h1>
                                                    `
                                                }
                                                return(
                                                    <>
                                                        <button key={index} type="button" style={{color:"#8822bb"}} className="btn-lg btn-light fs-3 p-3 me-2  border-0" onClick={putWord}>{item.word}</button>
                                                    </>
                                                )
                                            })}
                                        </td>
                                        </tr>
                                    </>
                                )
                            })}
                        </tbody>
                        </table>
                    </div>
                    {/* <!-- *************** --> */}
                    </div>
                </div>
                <div className=" bg-danger flex-fill rounded py-10 d-flex justify-content-center align-items-center text-light" id={props.infoSentence.buttonTargetId}></div>
            </div>
        </section>
    </>
  )
}
