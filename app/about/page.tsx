import Aboutcon from "../components/about/aboutcon"
import Mytimeline from "../components/about/mytimeline"

async function delay() {
  return new Promise((res) => setTimeout(res, 2000));
}
const page = async () => {
  await delay();
  return (
    <>
    <Aboutcon/>
    <Mytimeline/>
    </>
  )
}

export default page