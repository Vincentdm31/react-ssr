const express = require('express');
const app = express();
const port = 3000;
var cors = require('cors');

app.use(cors());

app.get('/cats', (req, res) => {
  res.send({
    cats: [
      {
        name: "Joh",
        img: "https://d1wn0q81ehzw6k.cloudfront.net/additional/thul/media/2154f5882643dfed?w=890&h=590&crop=1"
      },
      {
        name: "Nny",
        img: "https://s36537.pcdn.co/wp-content/uploads/2018/08/A-fat-cat-lying-down-showing-off-his-stomach.jpg.optimal.jpg"
      },
      {
        name: "Depp",
        img: "https://www.inquirer.com/resizer/zu_5ykrWAhI-Z3wxVMoareSAHiA=/700x467/smart/filters:format(webp)/arc-anglerfish-arc2-prod-pmn.s3.amazonaws.com/public/J4QDHA4WPZHJJJKAUWMI6HGL6A.jpg",
      },
    ],
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
