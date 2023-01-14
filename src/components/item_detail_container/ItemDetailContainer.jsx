import React from "react";
import ItemDetail from "../item_detail/ItemDetail";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDoc, doc, getFirestore } from "firebase/firestore";

const ItemDetailContainer = () => {
  const [listProducts, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const db = getFirestore();
    const item = doc(db, "products", id);
    getDoc(item).then((snapshot) => {
      snapshot.exists();
      setProducts({ id: snapshot.id, ...snapshot.data() });
      setLoading(false);
    });
  }, [id]);

  return <div></div>;
};

export default ItemDetailContainer;
