import React from "react";
import learnlogo from "../assets/memory.jpg";

function Learn() {
  return (
    <div className="w-full h-full p-5 ">
      <div className="flex w-full h-full">
        <div className="h-[55%] w-[60%] flex flex-col">
          <p className="text-2xl font-semibold">
            <span className="text-logo-color">Memory Allocation</span>{" "}
            Algorithms
          </p>
          <br />
          <p>
            Memory allocation algorithms are essential in managing computer
            memory effectively, particularly in operating systems. These
            algorithms aims to efficiently allocate memory while minimizing
            fragmentation and ensuring fair distribution. Key memory allocation
            algorithms include First Fit, Next Fit, Best Fit, Worst Fit, Buddy
            System, and Quick Fit. and also paging and segmentation.
          </p>
          <br />

          <div className="h-[55%] w-[90%] flex flex-col">
            <p className="text-2xl font-semibold">
              <span className="text-logo-color">Dynamic</span> Memory Allocation
            </p>
            <br />
            <p className="w-full">
              In dynamic memory allocation, memory is divided into
              variable-sized partitions. When a process arrives, it requests
              memory dynamically from the available pool. The system allocates
              memory dynamically to each process, and the unused memory is
              returned to the pool when a process terminates. Simply it allows
              the programs to request and release memory as needed.
            </p>
            <br />
          </div>

          <p className="text-2xl font-semibold">
            <span className="text-logo-color">Best Fit</span> Algorithm
          </p>
          <br />
          <p>
            Best Fit algorithm allocates the smallest available memory block
            that is large enough to accommodate the process, minimizing wasted
            memory. It searches the entire list of free memory blocks to find
            the smallest block that fits the process. It is efficient in terms
            of memory utilization but may lead to fragmentation.
            <ul>
              <li>
                {" "}
                <span className="font-semibold text-logo-color">
                  {" "}
                  Advantages:{" "}
                </span>{" "}
              </li>

              <ul>
                <li>Minimizes wasted memory</li>
                <li>Optimal for small processes</li>
              </ul>
              <li>
                {" "}
                <span className="font-semibold text-logo-color">
                  {" "}
                  Disadvantages:{" "}
                </span>{" "}
              </li>
              <ul>
                <li>May lead to fragmentation</li>
                <li>Slower than First Fit</li>
              </ul>
            </ul>
          </p>
          <br />

          <p className="text-2xl font-semibold">
            <span className="text-logo-color">Best Fit</span> Algorithm
            Characteristics
          </p>
          <br />
          <p>
            <ul>
              <li>Minimizes the External Fragmentation</li>
              <li>Less Internal Fragmentation</li>
            </ul>
          </p>
        </div>
        <div className="flex h-[55%] w-[40%] pt-0">
          <br />
          <img
            src={learnlogo}
            alt=""
            className="h-[58vh] flex justify-center items-center"
          />
        </div>
      </div>

      <br />
    </div>
  );
}

export default Learn;
