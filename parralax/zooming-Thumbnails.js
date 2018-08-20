/*
make a figurecaption move into the figure element so
that the user cant see the pricing on the goods
*/

(html)
// one of the html
figcaption
BlackBird Sweater - <strong> $ 135 <strong>

(css)
figurecaption{
  position: absolute;
  bottom: 10px;
  left:-100px;
  background-color: black;
  color: white;
  padding: 2px 8px;
  font-size: 11px;
  transition: all 0.3s ease-in-out;
}
img{
  display:block;
  transform: scale(1)
  transition: all 0.3s ease-in-out;
}
figure{
  margin-bottom: 20px;
  position: relative;
  opacity: 0;
  transform: translateX(-20px);
  transition: all 0.3s ease-in-out;
  overflow: hidden;
  cursor: pointer;
  &:hover figurecaption{
    left:0;
  }
  &:hover img{
    transform:scale(1.1);
  }
}
