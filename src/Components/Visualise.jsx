import React, { useState } from "react";
import dynamic from "../assets/dynamicpt.png";
import DynamicPt from "./DynamicPt";
import Input from "./Input";
import Button from "./Button";
import MemoryBlock from "./MemoryBlock";
import ProcessBlock from "./ProcessBlock";
import { AnimatePresence } from "framer-motion";

function Visualise() {
  const [Dyn, setDyn] = useState(false);
  const [memory, setMemory] = useState([]);
  const [size, setSize] = useState("");
  const [process, setprocess] = useState([]);
  const [psize, setPSize] = useState("");
  const [showFit, setShowFit] = useState(false);

  const addMemory = () => {
    if (size <= 0) {
      alert("Enter a Valid Size");
    } else if (memory.length == 100) {
      alert("Only 5 Memory Blocks Allowed");
    } else {
      setMemory([...memory, size]);
      setSize("");
    }
  };
  const deleteMemory = () => {
    if (memory.length === 0) {
      alert("Memory Empty");
    } else {
      setMemory([...memory.slice(0, -1)]);
    }
  };

  const addProcess = () => {
    if (psize <= 0) {
      alert("Enter a Valid Size");
    } else if (process.length == 100) {
      alert("Only 10 Processes Allowed");
    } else {
      setprocess([...process, psize]);
      setPSize("");
    }
  };
  const deleteProcess = () => {
    if (process.length === 0) {
      alert("No Process Available");
    } else {
      setprocess([...process.slice(0, -1)]);
    }
  };

  return (
    <div className="min-h-[95vh] w-full flex flex-col items-center justify-center p-5">
      <div className="min-h-[10vh] mt-4 text-4xl font-semibold">
        <span className="text-logo-color">Best Fit</span> Algorithms
      </div>
      <div className="h-[60vh] w-[80%] flex flex-col items-center justify-center mb-5">
        <div className="h-[30%] w-[70%] text-3xl items-center justify-center flex font-semibold border-b-logo-color border-b-2 mb-5">
          Choose Partition
        </div>
        <div className="h-[50%] w-[70%] flex justify-center">
         

          <div className="flex items-center justify-center w-1/2 h-full">
            <div
              onClick={() => {
                setDyn(true);
                setFixed(false);
              }}
              className={`${
                Dyn
                  ? "bg-logo-color"
                  : "bg-slate-300 hover:border-4 hover:border-sky-400 hover:bg-sky-200 cursor-pointer"
              } flex-1 h-[90%] w-[90%] rounded-xl ease-in-out duration-150 gap-5 flex flex-col items-center justify-center`}
            >
              <img src={dynamic} alt="" className="h-[50%]" />
              <p className="text-3xl font-medium text-black ">Dynamic</p>
            </div>
          </div>
        </div>
      </div>
      {/* Memory */}
      <div className="flex flex-col items-center justify-center w-full">
        <div className="flex items-center justify-start w-full pb-12 text-3xl font-semibold pl-52 text-logo-color">
          Memory
        </div>
        <div className="flex gap-3">
          <Input
            type="number"
            value={size}
            heading="Enter Block Size"
            setData={setSize}
            placeholder="Eg. 100KB"
          />
          <div className="flex gap-5 pt-8">
            <Button
              name="Add"
              x="50px"
              y="40px"
              func={addMemory}
              bg="bg-green-500"
              bghov="bg-green-400"
            />
            <Button
              name="Delete"
              x="40px"
              y="40px"
              func={deleteMemory}
              bg="bg-red-500"
              bghov="bg-red-300"
            />
            {console.log(memory)}
          </div>
        </div>
      </div>
      <AnimatePresence>
        <div className="h-[20vh] flex overflow-auto gap-y-1 w-[90vw] justify-center items-center my-10">
          {memory.length > 0
            ? memory.map((obj, index) => {
                return <MemoryBlock size={obj} key={index} />;
              })
            : "No Memory Available"}
        </div>
      </AnimatePresence>

      {/* Processes */}
      <div className="flex flex-col items-center justify-center w-full">
        <div className="flex items-center justify-start w-full pb-12 text-3xl font-semibold pl-52 text-logo-color">
          Process
        </div>
        <div className="flex gap-3">
          <Input
            type="number"
            value={psize}
            heading="Enter Process Size"
            setData={setPSize}
            placeholder="Eg. 100KB"
          />
          <div className="flex gap-5 pt-8">
            <Button
              name="Add"
              x="50px"
              y="40px"
              func={addProcess}
              bg="bg-green-500"
              bghov="bg-green-400"
            />
            <Button
              name="Delete"
              x="40px"
              y="40px"
              func={deleteProcess}
              bg="bg-red-500"
              bghov="bg-red-300"
            />
            {console.log(process)}
          </div>
        </div>
      </div>
      <div className="h-[20vh] flex overflow-auto gap-2 w-[90vw] justify-center items-center mt-10 mb-24">
        {process.length > 0
          ? process.map((obj, index) => {
              return <ProcessBlock size={obj} />;
            })
          : "No Process Available"}
      </div>
      <Button
        name="Allocation"
        x="200px"
        y="100px"
        func={() => {
          if (process.length && memory.length) {
            setShowFit(!showFit);
          } else {
            alert("Memory Empty or Process not available!");
          }
        }}
        bg="bg-emerald-500"
        bghov="bg-logo-color"
      />
      <div className="flex items-center justify-center w-full h-full mt-10 border-t-8 border-t-logo-color">
        {showFit && Dyn && <DynamicPt memory={memory} process={process} />}
      </div>
    </div>
  );
}

export default Visualise;
