import { useState, useEffect } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";

const fallbackProducts = [
  { id: "fallback-1", name: "Vattenpistol Ryggsäck", price: 349 },
  { id: "fallback-2", name: "Enhörningsfloat XL", price: 249 },
  { id: "fallback-3", name: "Dykarmask + Snorkel", price: 199 },
  { id: "fallback-4", name: "Sandslottsbyggarsats", price: 179 },
  { id: "fallback-5", name: "Surfbräda Junior", price: 299 },
  { id: "fallback-6", name: "Uppblåsbar Kajak", price: 499 },
  { id: "fallback-7", name: "Strandracket Set", price: 229 },
  { id: "fallback-8", name: "Självlysande Frisbee", price: 89 },
  { id: "fallback-9", name: "Vattentrampolin Mini", price: 399 },
  { id: "fallback-10", name: "Vattenbomb Launcher", price: 259 },
  { id: "fallback-11", name: "Neonflytväst Barn", price: 159 },
  { id: "fallback-12", name: "Gigantisk Bubbelsåpmaskin", price: 349 },
  { id: "fallback-13", name: "Bocciasats Neon", price: 129 },
  { id: "fallback-14", name: "Havsforskar-kit", price: 189 },
  { id: "fallback-15", name: "Strandtält Popup", price: 389 },
  { id: "fallback-16", name: "Hängmatta Strandstil", price: 329 },
  { id: "fallback-17", name: "Fjärrstyrd Vattenbåt", price: 599 },
  { id: "fallback-18", name: "Slackline-kit", price: 219 },
  { id: "fallback-19", name: "Hoppsäck", price: 159 },
  { id: "fallback-20", name: "Undervattenskikare", price: 239 },
];

function useProducts() {
  const [products, setProducts] = useState(fallbackProducts);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onSnapshot(
      collection(db, "products"),
      (snapshot) => {
        const data = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        if (data.length > 0) {
          setProducts(data);
        } else {
          setProducts(fallbackProducts);
        }
        setLoading(false);
      },
      (error) => {
        console.error("Firestore error loading products:", error);
        setProducts(fallbackProducts);
        setLoading(false);
      },
    );

    return () => unsubscribe();
  }, []);

  return { products, loading };
}

export default useProducts;
