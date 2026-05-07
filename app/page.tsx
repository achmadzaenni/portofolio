import Aboutlitle from "./components/home/aboutlitle"
import Contrigithub from "./components/home/contrigithub"
import  Myskill  from "./components/home/myskill"

async function delay() {
  return new Promise((res) => setTimeout(res, 2000));
}
const page = async () => {
  await delay();
  return (
    <>
    <Aboutlitle/>
    <Contrigithub/>
    <Myskill/>
    </>
  )
}

export default page