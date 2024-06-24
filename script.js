const gifsPerPage = 6;
let currentPage = 1;

const gifs = [
    "https://i.pinimg.com/originals/1a/c2/af/1ac2af475f15ed6de45a4ee195e2b756.gif",
    "https://media.tenor.com/gJ76dAHxHfQAAAAM/internacional-porto-alegre.gif",
    "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExdDNmMjFjbDVrZm91YmUwcDY1ZmJ4aWE3cndzdWFkZDJzZXpxeGY1diZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/6IZwWFQjZODQYZZQ8u/giphy.webp",
    "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg-i3siNmC9-N8lGXwGl-0ckX4pFVSp21LV0yL6dv0mhcX3UFRtwcJQbOSmu1HblXUyJwA0xK4SRI_0P91mVI9AP1Ip82Ks2kq-TTu9IP8r2PGJTGqFnh7zBchFYg19rH4voPKWmqESiqXW/s1600/i8.gif",
    "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExem85ejRqbXVzbDF2NWFiYzQybGNsZHJldmt2dTdteDVndzZvM25payZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/Zk1ZLWgbn1FKBvBp4f/giphy.webp",
    "https://media4.giphy.com/media/CfbfIEppHffvcVhEEN/200w.webp",
    "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExaWlmZmo2d2p0Z2xsbnRkbjlsZWR2N20zMHNyZnA1YWhjdmZxZjI2MiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/Q8PBZA2FFxgmOxdeJo/giphy.webp",
    "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExZmgyYnVjajJjcmMwaXVjZ3J6ZTc5dDU0dzAzaHUwdmR5d25wYmpnYSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/j4vKzohveu7nvTNccC/giphy.webp",
    "https://media3.giphy.com/media/rNljgQs6wB4Q29skOr/giphy.gif?cid=ecf05e47tnaac2xkg0lcsl4gulxtcsfmsisirfjskzl1qep7&ep=v1_gifs_gifId&rid=giphy.gif&ct=s",
    "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExemVmZ29kaGcwd2kyMmU4NTE3eXIzeHFjMXoyMng3b25tMG1iczVpcCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Slx9ezngS4p3URijAN/giphy.webp"
];

function showPage(page) {
    const start = (page - 1) * gifsPerPage;
    const end = start + gifsPerPage;
    const gifsToShow = gifs.slice(start, end);

    const gifContainer = document.getElementById('gif-container');
    gifContainer.innerHTML = '';
    gifsToShow.forEach(gif => {
        const img = document.createElement('img');
        img.src = gif;
        gifContainer.appendChild(img);
    });

    document.getElementById('page-info').innerText = `Page ${page}`;
    document.getElementById('prev').disabled = page === 1;
    document.getElementById('next').disabled = end >= gifs.length;
}

document.getElementById('prev').addEventListener('click', () => {
    if (currentPage > 1) {
        currentPage--;
        showPage(currentPage);
    }
});

document.getElementById('next').addEventListener('click', () => {
    if (currentPage * gifsPerPage < gifs.length) {
        currentPage++;
        showPage(currentPage);
    }
});

showPage(currentPage);