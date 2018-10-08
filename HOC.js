
let app = document.getElementById("container");

let menu = document.createElement("div");
menu.setAttribute("id", "nav_container");


let a1 = document.createElement("A")
let title = document.createTextNode("High on Coding");
a1.setAttribute("class", "menu_link")
a1.appendChild(title);

let a2 = document.createElement("A")
title = document.createTextNode("Home");
a2.setAttribute("class", "menu_link")
a2.appendChild(title);

let a3 = document.createElement("A")
title = document.createTextNode("Catergories");
a3.setAttribute("class", "menu_link")
a3.appendChild(title);


let info = document.createElement("div");
info.setAttribute("id", "reviews");

//let div2 = document.getElementById("reviews");

let heading1 = document.createElement("h3");
heading1.setAttribute("class", "curse_heading");
let reviews = document.createTextNode("Curse of the Current Reviews")
heading1.appendChild(reviews);

let p1 = document.createElement("p");
p1.setAttribute("class", "p1_para");
let para1 = document.createTextNode("When you want to buy any application from the Apple iTunes store you have more choices than you can handle. Most of the users scroll past the application description completely avoiding it like ads displayed on the right column of your webpage. Their choice is dependent on three important factors price, screenshot and reviews.")
p1.appendChild(para1);

let info2 = document.createElement("div");
info2.setAttribute("id", "info_2");

let heading2 = document.createElement("h4");
heading2.setAttribute("class", "heading_2");
let watch = document.createTextNode("Hello Kit");
heading2.appendChild(watch);

let p2 = document.createElement("p");
p2.setAttribute("class", "p2_para");
let para2 = document.createTextNode("Last month Apple released the anticipated WatchKit Framework for developers in the form of iOS 8.2 beta SDK release. The WatchKit framework enable the developers to create Apple Watch applications. In this article we are going to focus on the basics of getting started with the WatchKit framework and developing apps for the Apple Watch.");
p2.appendChild(para2);

let subHead = document.createElement("h6");
subHead.setAttribute("class", "small_heading");
let small = document.createTextNode("12 Comments   124 likes")
subHead.appendChild(small);







menu.appendChild(a1);
menu.appendChild(a2);
menu.appendChild(a3);
app.appendChild(menu);

info.appendChild(heading1);
app.appendChild(info);

info.appendChild(p1);
app.appendChild(info);

info2.appendChild(heading2)
app.appendChild(info2)

info2.appendChild(p2);
app.appendChild(info2);

info2.appendChild(subHead);
app.appendChild(info2);
