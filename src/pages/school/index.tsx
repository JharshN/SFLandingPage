import Card from "../../components/card";
import React from "react";
import Link from "next/link";
import Bannerad from "../../components/bannerad";
import Layout from "./[page]/Layout";
import Layoutt from "../Layout";
import { useRouter } from "next/router";

// async function getSchooldata() {
//   let { data: School, error } = await supabase
//     .from("School")
//     .select("schoolname");

//   if (error) {
//     console.error("Error fetching data:", error);
//     return;
//   }

//   console.log(School);
// }

export default function skillclass() {

  const router = useRouter();
  const pathSegments = router.asPath.split("/");

  // const lastSegment = pathSegments[pathSegments.length - 1];

  // const fetchImages = async () => {
  //   const { data, error } = await supabase.storage
  //     .from("uploads")
  //     .list(user.id + "/");

  //   if (data) {
  //     setCoverImages(data);
  //     console.log(coverImages);
  //   }
  //   if (error) {
  //     console.log(error);
  //   }
  // };

  // const fetchSchools = async () => {
  //   let { data: School, error } = await supabase
  //     .from("School")
  //     .select("*")

  //     // Filters
  //     .eq("column", "Equal to");
  // };

  // useEffect(() => {
  //   // fetchImages();
  // }, []);

  return (
    <>
      <Layoutt>
        <Layout>
          <Bannerad />
          <Link href={`../school/1/schoolname`}>
            {" "}
            <Card
              name="Shree Swami"
              imgsrc={
                "https://images.pexels.com/photos/57690/pexels-photo-57690.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              }
              rating={"3.4"}
            />{" "}
          </Link>{" "}
          <Link href={`../school/1/schoolname`}>
            {" "}
            <Card
              name="Shree Swami"
              imgsrc={
                "https://images.pexels.com/photos/57690/pexels-photo-57690.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              }
              rating={"3.4"}
            />{" "}
          </Link>{" "}
          <Link href={`../school/1/schoolname`}>
            {" "}
            <Card
              name="Shree Swami"
              imgsrc={
                "https://images.pexels.com/photos/57690/pexels-photo-57690.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              }
              rating={"3.4"}
            />{" "}
          </Link>{" "}
        </Layout>
      </Layoutt>
    </>
  );
}
