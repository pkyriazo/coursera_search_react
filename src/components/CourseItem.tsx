import React from "react";
import { Course } from "../types/course";
import "./CourseItem.scss";
import toCamelcase from "../utilities/toCamelcase";

type CourseItemProps = {
    course: Course;
    style: any;
};

const CourseItem = (props: CourseItemProps) => (
    <div style={props.style}>
        <a
            href={"https://www.coursera.org" + props.course.objectUrl}
            title={props.course.name}
            target="_blank"
            rel="noopener noreferrer"
            className="block p-3 bg-white shadow rounded border-2 border-transparent z-0 hover:bg-indigo-100 hover:border-indigo-200"
        >
            <div className="text-lg font-semibold text-black truncate">
                {props.course.name}
            </div>
            <div className="text-xs my-1 text-red-600 font-medium truncate">
                {props.course.partners.join(" | ") || "-"}
            </div>
            <div
                className={
                    "course_type text-blue-500 text-xs font-normal " +
                    props.course.entityType.toLowerCase().replace(" ", "_")
                }
            >
                {toCamelcase(props.course.entityType)}
            </div>
        </a>
    </div>
);

export default CourseItem;
