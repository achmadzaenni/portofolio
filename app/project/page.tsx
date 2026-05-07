import Stickyproject from '../components/project/stickyproject'

async function delay() {
  'use cache'
  return new Promise((res) => setTimeout(res, 2000));
}
const page = async () => {
  await delay();
  return (
    <Stickyproject/>
  )
}

export default page