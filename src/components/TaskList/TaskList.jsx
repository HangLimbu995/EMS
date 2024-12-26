import React from 'react';
import AcceptTask from './AcceptTask';
import NewTask from './NewTask';
import CompleteTask from './CompleteTask';
import FailedTask from './FailedTask';

const TaskList = ({ data }) => {
    return (
        <div
            className="h-[55vh] w-full overflow-x-auto overflow-y-hidden flex items-center justify-start gap-5 mt-10"
        /* style={{ scrollbarWidth: "none" }}*/
        >
            {data.tasks.map((elem, i) => {
                {console.log('elem is',elem)}
                if (elem.active) {
                    return <AcceptTask key={i} data={elem} />
                }
                if (elem.newTask) {
                    return <NewTask key={i} data={elem} />
                }
                if (elem.completed) {
                    return <CompleteTask data={elem} key={i} />
                }
                if (elem.failed) {
                    return <FailedTask key={i} data={elem} />
                }
            })}
        </div>
    );
};


export default TaskList;
