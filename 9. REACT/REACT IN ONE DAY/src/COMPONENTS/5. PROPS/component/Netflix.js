import React from "react";
import Card from "./Card";
import "./card.css";
function Netflix() {
  return (
    <>

   
      <h1 className="heading_style">Top 5 netflix Series</h1>
      {/* <Cards
      img="https://m.media-amazon.com/images/M/MV5BNWFlNTY5MzEtNDhhMy00YTRmLWJhYjMtM2JjODkyMGRkZmUzXkEyXkFqcGdeQXVyOTAzMTc2MjA@._V1_UY209_CR34,0,140,209_AL_.jpg"
      title="Kota Factory"
      text="Youtube" btn="Go To This link"
      
       />

       <Cards
      img="https://m.media-amazon.com/images/M/MV5BNWFlNTY5MzEtNDhhMy00YTRmLWJhYjMtM2JjODkyMGRkZmUzXkEyXkFqcGdeQXVyOTAzMTc2MjA@._V1_UY209_CR34,0,140,209_AL_.jpg"
      title="Kota Factory"
      text="Youtube" btn="Go To This link"
      
       />

       <Cards
      img="https://m.media-amazon.com/images/M/MV5BNWFlNTY5MzEtNDhhMy00YTRmLWJhYjMtM2JjODkyMGRkZmUzXkEyXkFqcGdeQXVyOTAzMTc2MjA@._V1_UY209_CR34,0,140,209_AL_.jpg"
      title="Kota Factory"
      text="Youtube" btn="Go To This link"
      
       />

       <Cards
      img="https://m.media-amazon.com/images/M/MV5BNWFlNTY5MzEtNDhhMy00YTRmLWJhYjMtM2JjODkyMGRkZmUzXkEyXkFqcGdeQXVyOTAzMTc2MjA@._V1_UY209_CR34,0,140,209_AL_.jpg"
      title="Kota Factory"
      text="Youtube" btn="Go To This link"
      
       /> */}

       <Card
        imgsrc="https://m.media-amazon.com/images/M/MV5BNWFlNTY5MzEtNDhhMy00YTRmLWJhYjMtM2JjODkyMGRkZmUzXkEyXkFqcGdeQXVyOTAzMTc2MjA@._V1_UY209_CR34,0,140,209_AL_.jpg"
        title="Youtube"
        sname="Kota Factory"
        link="https://www.imdb.com/title/tt9432978/?pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=&pf_rd_r=6N2TFYAY6Y5FS0SZP77P&pf_rd_s=center-3&pf_rd_t=60601&pf_rd_i=&ref_=il_tl_li_tt"
      />
      <Card
        imgsrc="https://m.media-amazon.com/images/M/MV5BMjJlMjJlMzYtNmU5Yy00N2MwLWJmMjEtNWUwZWIyMGViZDgyXkEyXkFqcGdeQXVyOTAzMTc2MjA@._V1_UY209_CR0,0,140,209_AL_.jpg"
        title="Netflix"
        sname="Sacred Games"
        link="https://www.imdb.com/title/tt6077448/?pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=&pf_rd_r=6N2TFYAY6Y5FS0SZP77P&pf_rd_s=center-3&pf_rd_t=60601&pf_rd_i=&ref_=il_tl_li_tt"
      />
      <Card
        imgsrc="https://m.media-amazon.com/images/M/MV5BZjZkY2YxYTgtYmVkOC00NTgwLThjY2YtN2Y1ZWFlZmVhOTQ5XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UY209_CR4,0,140,209_AL_.jpg"
        title="Amazon Prime"
        sname="The Family Man"
        link="https://www.imdb.com/title/tt9544034/?pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=&pf_rd_r=6N2TFYAY6Y5FS0SZP77P&pf_rd_s=center-3&pf_rd_t=60601&pf_rd_i=&ref_=il_tl_li_tt"
      />
      <Card
        imgsrc="https://m.media-amazon.com/images/M/MV5BODg1MTYyZjYtMzJhZi00ZjI3LWI3MTItZTFhZDNhZmYwMjYwXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_UY209_CR0,0,140,209_AL_.jpg"
        title="Netflix"
        sname="Delhi Crime"
        link="https://www.imdb.com/title/tt9398466/?pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=&pf_rd_r=6N2TFYAY6Y5FS0SZP77P&pf_rd_s=center-3&pf_rd_t=60601&pf_rd_i=&ref_=il_tl_li_tt"
      />
      
       <Card
        imgsrc="https://m.media-amazon.com/images/M/MV5BODg1MTYyZjYtMzJhZi00ZjI3LWI3MTItZTFhZDNhZmYwMjYwXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_UY209_CR0,0,140,209_AL_.jpg"
        title="Netflix"
        sname="Delhi Crime"
        link="https://www.imdb.com/title/tt9398466/?pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=&pf_rd_r=6N2TFYAY6Y5FS0SZP77P&pf_rd_s=center-3&pf_rd_t=60601&pf_rd_i=&ref_=il_tl_li_tt"
      /> 
    </>
  );
}

export default Netflix;
