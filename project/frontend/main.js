const Apis = (() => {
    const url = "http://localhost:4232/courseList";
    const getData = fetch(url).then((res) => res.json())
    // .then(json => console.log(json));
    return {
        getData
    };
})();

const View = (() => {
    const domStr = {
        available: "#available-container",
        selected: "#selected-container",
        credit: "#credit",
        selectBtn: "#selectBtn"
    }

    const createTmp = (arr) => {
        let temp = "";
        arr.forEach(course => {
            const type = course.required ? "Compulsory" : "Elective";
            const info = [course.courseName, type, course.credit];
            temp += `<li>
            <p data-object=${JSON.stringify(course)} data-array="${info}" data-clicked="false">${course.courseName}<br />
            Course type: ${type}<br />
            Course credit: ${course.credit}
            </p>
            </li>`;
        });
        return temp;
    }

    const render = (ele, tmp) => {
        ele.innerHTML = tmp;
    };

    return {
        domStr,
        createTmp,
        render
    }
})();

const Model = ((view, api) => {
    const {getData} = api;
    const {domStr, createTmp, render} = view;

    class Available {
        constructor() {
            this._courseList = [];
        }
        get getCourseList() {
            return this._courseList;
        }
        set newCourseList(arr) {
            this._courseList = arr;
            const availableContainer = document.querySelector(domStr.available);
            const tmp = createTmp(this._courseList);
            render(availableContainer, tmp);
        }
    }

    class Selected {
        constructor() {
            this._courseList = [];
        }
        get getCourseList() {
            return this._courseList;
        }
        set newCourseList(arr) {
            this._courseList = arr;
            const availableContainer = document.querySelector(domStr.available);
            const tmp = createTmp(this._courseList);
            render(availableContainer, tmp);
        }
    }

    return {
        getData,
        Available,
        Selected
    }
})(View, Apis);

const Controller = ((view, model) => {
    const { getData, Available, Selected } = model;
    const { domStr } = view;
    const available = new Available();
    const selected = new Selected();
    const init = () => {
        getData.then((data) => {
            // console.log(data)
            available.newCourseList = data;
        });
    }

    const addCourse = () => {
        const credit = document.querySelector(domStr.credit);
        const availableContainer = document.querySelector(domStr.available);
        const infoList = [];
        availableContainer.addEventListener("click", (event) => {
            if (event.target.tagName === "P") {
                const info = event.target.getAttribute("data-array").split(',');
                const courseInfo = event.target.getAttribute("data-object");
                console.log(courseInfo)
                if (event.target.getAttribute("data-clicked") === "false") {
                    const num = Number(credit.innerHTML) + Number(courseInfo.credit);
                    if (num > 18) { // overload protection
                        alert("You can only choose up to 18 credits in one semester");
                    }
                    else {
                        event.target.dataset.clicked = "true";
                        event.target.classList.add("highlighted"); // change background color
                        credit.innerHTML = num; // modify credits
                        infoList.push(info);
                    }
                }
                else {
                    event.target.dataset.clicked = "false";
                    event.target.classList.remove("highlighted"); // change background color
                    const num = Number(credit.innerHTML) - Number(courseInfo.credit);
                    credit.innerHTML = num; // modify credits
                    infoList.pop();
                }
                // console.log(event.target.getAttribute("data-clicked"))
            }
        })
        return infoList;
    }

    const select = (arr) => {
        const selectBtn = document.querySelector(domStr.selectBtn);
        const infoList = arr;
        selectBtn.addEventListener("click", (event) => {
            const credit = document.querySelector(domStr.credit);
            const confirmed = confirm("You have chosen " + credit.innerHTML + " credits for this semester. You cannot change once you submit. Do you want to confirm?")
            if(confirmed) {

            }
        })
    }

    const bootstrap = () => {
        init();
        const infoList = addCourse();
        select(infoList);
    }

    return {
        bootstrap
    }
})(View, Model);

Controller.bootstrap();
