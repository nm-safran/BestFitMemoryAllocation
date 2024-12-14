import React, { useEffect } from "react";
import MemoryBlock from "./MemoryBlock";
import ProcessBlock from "./ProcessBlock";

// variables for memory and process
function DynamicPt(props) {
  const memory = props.memory;
  const processes = props.process;

// array used to track the memory and process
  const bestFit = () => {
    let mem = [...memory];
    const doneProcess = [];
    let mapping = Array(memory.length);
    for (let i = 0; i < memory.length; i++) mapping[i] = [];
    let Fragmentation = 0;

    //Best fit algorithm logics
    // minGap is used to find the minimum gap between the memory and process
    for (let i = 0; i < processes.length; i++) {
      let minGap = 10000000000000000,
        index = -1;
      
    // loop to find the minimum gap between the memory and process
      let pSz = parseInt(processes[i]);
      for (let j = 0; j < memory.length; j++) {
        let mSz = parseInt(mem[j]);
        
    // if the memory size is greater than the process size and the gap is minimum then the process is added to the memory
        if (
          mSz >= pSz &&
          minGap > mSz - pSz &&
          !doneProcess.includes(i) &&
          !mapping[j].includes(i)
        ) {
          minGap = mSz - pSz;
          index = j;
        }
      }
      if (index !== -1) {
        mapping[index].push(i);
        mem[index] -= pSz;
        doneProcess.push(i);
      }
    }
    // loop to find the fragmentation
    
    for (let i = 0; i < processes.length; i++) {
      const el = parseInt(processes[i]);
      if (!doneProcess.includes(i)) {
        Fragmentation += el;
      }
    }
    // return the memory and process allocation
    
    return (
      <div className="h-[30%] w-[90vw] flex flex-col justify-center items-center">
        <p className="mb-10 text-3xl font-semibold text-logo-color">
          Best Fit:
        </p>
        <div className="min-h-[25%] w-[500%] flex justify-evenly items-center ">
          <div className="flex items-center justify-center w-full h-full overflow-auto">
            {memory.map((obj, ind) => {
              return (
                <MemoryBlock
                  size={obj}
                  childs={
                    mapping[ind].length > 0 ? (
                      <div className="flex items-center justify-start w-full h-full">
                        {mapping[ind].map((el, i) => {
                          return <ProcessBlock size={processes[el]} />;
                        })}
                      </div>
                    ) : (
                      ""
                    )
                  }
                />
              );
            })}
          </div>
        </div>
     
        <div className="flex items-center w-full h-full justify-evenly mt-9"> 
          <p className="flex flex-col h-full text-xl text-logo-color">
            External Fragmentation:{" "}
            <span className="text-red-400">{Fragmentation} KB</span>
          </p>
          <div className="h-full">
            <p className="text-xl text-logo-color">Incomplete Processes:</p>
            <div className="flex flex-col h-full gap-1 overflow-auto">
              {processes.length === doneProcess.length ? (
                <p className="text-green-500">All Process Alloted</p>
              ) : (
                processes.map((el, index) => {
                  if (!doneProcess.includes(index)) {
                    return <ProcessBlock size={el} block={true} />;
                  }
                })
              )}
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="h-[200vh] w-full flex flex-col justify-center items-center mt-32">
      <div className="w-full h-full">{bestFit()}</div>
    </div>
  );
}

export default DynamicPt;
