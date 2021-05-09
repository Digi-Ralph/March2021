// const cursor = document.querySelector('.cursor')
// const border = document.querySelector('.border')


const cursor = document.createElement('div');
cursor.classList.add("cursor")
const border = document.createElement('div')
border.classList.add('border')
document.body.append(cursor)
document.body.append(border)



function move(obj, e) {
    //declar cordonation
    const {
        clientX: x,
        clientY: y
    } = e
    // reset style
    obj.style = "";
    // setup client x & y cordonation
    obj.style.top = y + 'px';
    obj.style.left = x + 'px';

}
//if the cursor object.
if (cursor) {

    window.addEventListener('mousemove', function (e) {

        const t = e.target;
        const f = border;
        const c = cursor;
        //if the target Tag name is A (<a>)
        if (t.tagName === "A") {
            // turn the cursor background to transparent
            c.style.backgroundColor = 'transparent'
            //set up the border position using offsettop/left (element position relative to refernce parent)
            f.style.top = t.offsetTop + "px"
            f.style.left = t.offsetLeft + "px"
            // make the width & the heigh of the border equal that of the button
            f.style.width = t.clientWidth + "px"
            f.style.height = t.clientHeight + "px"
            // add the class On-focus (border-radius and positions)
            f.classList.add('on-focus')

        } else {
            // if cursor left the button use start move function 
            move(c, e);
            move(f, e);
            //remove class on-focus
            f.classList.remove('on-focus')

        }
    })
}

/**

    notes:
    - offsetWidth === border(left/right) + padding(left/right) + Width of content(width);
    - offsetHeight === border(top/bottom) + padding(top/bottom) + Height of content(height);
    - offsetTop ==== returns the distance of the current element relative to the top of the offsetParent node
    - offsetleft ==== returns the distance of the current element relative to the left of the offsetParent node
    - offsetParent === The reference Parent by default is <body> it changed in case we set up element position((equal to relative|absolute|fixed))










*/