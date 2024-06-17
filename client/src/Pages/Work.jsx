import React from "react";
import WorkSideBar from "../components/WorkSideBar";
import { Form } from "react-router-dom";
import WorkContent from "../components/WorkContent";

const Work = () => {
  return (
    <div className="mt-10 pt-10">
      <WorkSideBar></WorkSideBar>

      <div class="p-4 sm:ml-64">
        <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 ">
         
          <WorkContent></WorkContent>
        </div>
      </div>
    </div>
  );
};


export default Work;
