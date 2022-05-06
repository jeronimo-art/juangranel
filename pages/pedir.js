import Head from "next/head";
import { useState, useEffect } from "react";
import { db } from "../firebase";
import { Button } from "@nextui-org/react";

export default function Pedir() {
  const [data, setData] = useState("");
  const pedir = [];
  const [peti, setPeti] = useState("");

  const getLinks = async () => {
    db.collection("links").onSnapshot((querySnapshot) => {
      const docs = [];
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      setData(docs);
    });
  };
  useEffect(() => {
    getLinks();
  }, []);

  return (
    <div>
      <Head>
        <title>Pedir | JuanGranel</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="cards-check">
        {data &&
          data.map((link) => (
            <div itemID={link} key={link.id}>
              <label>
                {link.description}
                <input
                  type="checkbox"
                  value={link.description}
                  onChange={(e) => {
                    var s = e.target.value;
                    if (e.target.checked) {
                      pedir.push(s);
                    } else {
                      var index = pedir.indexOf(s);
                      if (index > -1) {
                        pedir.splice(index, 1);
                      }
                    }
                    console.log(pedir);
                  }}
                ></input>
              </label>
            </div>
          ))}
      </div>
      <div className="cent-btn-pedir">
        <a
          onClick={() => {
            setPeti(pedir.toString());
          }}
          href={
            "https://api.whatsapp.com/send?phone=999373594&text=Estoy interesado/a en estos productos" +
            peti
          }
        >
          <Button color="#9fd364" className="btn-pedir">
            Pedir
          </Button>
        </a>
      </div>
    </div>
  );
}