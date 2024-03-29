import { useState } from "react";
import { FormControl, FormLabel, Input } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import axios from "axios";

const AddCourse = () => {
  const [Data, setData] = useState({
    course: "",
    teacher: "",
    rating: "",
    category: "",
    image: "",
    price: "",
    videoUrl1: "",
    videoUrl2: "",
    videoUrl3: "",
    videoUrl4: "",
  });

  const change = (e) => {
    const { name, value } = e.target;
    setData({ ...Data, [name]: value });
  };

  const submit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8080/createcourse", Data).then((res) => {
      console.log(res);
      // alert(res.data.message);
    });
    setData({
      course: "",
      teacher: "",
      rating: "",
      category: "",
      image: "",
      price: "",
      videoUrl1: "",
      videoUrl2: "",
      videoUrl3: "",
      videoUrl4: "",
    });
  };

  return (
      <div className="flex">
        <Box
          display="flex"
          flexDirection={"column"}
          alignItems="center"
          justifyContent="center"
          flexWrap={"wrap"}
          paddingLeft={"8rem"}
        >
          <FormControl m={50} mb={30}>
            <FormLabel mb={6} ml={5} fontSize={25} textColor={"#3C5EC1"}>
              Course Name:
            </FormLabel>
            <Input
              bgColor={"white"}
              color={"grey"}
              border={"1px solid"}
              borderRadius={6}
              borderColor={"#3C5EC1"}
              fontSize={17}
              mb={10}
              w={"550px"}
              h={45}
              p={10}
              placeholder="Enter Course Name:"
              type="text"
              name="course"
              // required
              value={Data.course}
              onChange={change}
            />
            <FormLabel mb={6} ml={5} fontSize={25} textColor={"#3C5EC1"}>
              Teacher Name:
            </FormLabel>
            <Input
              bgColor={"white"}
              color={"grey"}
              mb={10}
              border={"1px solid"}
              borderRadius={6}
              fontSize={17}
              w={"550px"}
              h={45}
              p={10}
              placeholder="Enter Teacher Name:"
              type="text"
              name="teacher"
              value={Data.teacher}
              onChange={change}
            />
            <FormLabel mb={6} ml={5} fontSize={25} textColor={"#3C5EC1"}>
              Rating:
            </FormLabel>
            <Input
              bgColor={"white"}
              color={"grey"}
              mb={10}
              border={"1px solid"}
              borderRadius={6}
              fontSize={17}
              w={"550px"}
              h={45}
              p={10}
              placeholder="Enter Course rating:"
              type="Number"
              name="rating"
              // required
              value={Data.rating}
              onChange={change}
            />
            <FormLabel mb={6} ml={5} fontSize={25} textColor={"#3C5EC1"}>
              Category:
            </FormLabel>
            <Input
              bgColor={"white"}
              color={"grey"}
              mb={10}
              border={"1px solid"}
              borderRadius={6}
              fontSize={17}
              w={"550px"}
              h={45}
              p={10}
              placeholder="Enter Category:"
              type="text"
              name="category"
              // required
              value={Data.category}
              onChange={change}
            />
            <FormLabel mb={6} ml={5} fontSize={25} textColor={"#3C5EC1"}>
              Image:
            </FormLabel>
            <Input
              bgColor={"white"}
              color={"grey"}
              mb={10}
              border={"1px solid"}
              borderRadius={6}
              fontSize={17}
              w={"550px"}
              h={45}
              p={10}
              placeholder="Enter Image Url:"
              type="Url"
              name="image"
              // required
              value={Data.image}
              onChange={change}
            />

            <FormLabel mb={6} ml={5} fontSize={25} textColor={"#3C5EC1"}>
              Price:
            </FormLabel>
            <Input
              bgColor={"white"}
              color={"grey"}
              mb={10}
              border={"1px solid"}
              borderRadius={6}
              borderColor={"#3C5EC1"}
              fontSize={17}
              w={550}
              h={45}
              p={10}
              placeholder="Enter Price:"
              type="number"
              name="price"
              required
              value={Data.price}
              onChange={change}
            />
          </FormControl>

          
        </Box>

        <Box
          display="flex"
          flexDirection={"column"}
          alignItems="center"
          justifyContent="center"
          flexWrap={"wrap"}
        >
          <FormControl m={50} mb={30}>
            <FormControl>
              <FormLabel mb={6} ml={5} fontSize={25} textColor={"#3C5EC1"}>
                Introduction Video:
              </FormLabel>
              <Input
                bgColor={"white"}
                color={"grey"}
                mb={10}
                border={"1px solid"}
                borderRadius={6}
                borderColor={"#3C5EC1"}
                fontSize={17}
                justifyContent={"center"}
                w={"550px"}
                h={45}
                p={10}
                type="Url"
                name="videoUrl1"
                required
                placeholder="Enter the Introduction video"
                value={Data.videoUrl1}
                onChange={change}
              />
              <FormLabel mb={6} ml={5} fontSize={25} textColor={"#3C5EC1"}>
                Basic Video:
              </FormLabel>
              <Input
                bgColor={"white"}
                color={"grey"}
                mb={10}
                border={"1px solid"}
                borderRadius={6}
                fontSize={17}
                w={"550px"}
                h={45}
                p={10}
                placeholder="Enter Basic Video Url:"
                type="Url"
                name="videoUrl2"
                required
                value={Data.videoUrl2}
                onChange={change}
              />
              <FormLabel mb={6} ml={5} fontSize={25} textColor={"#3C5EC1"}>
                Advanced Video:
              </FormLabel>
              <Input
                bgColor={"white"}
                color={"grey"}
                mb={10}
                border={"1px solid"}
                borderRadius={6}
                fontSize={17}
                w={"550px"}
                h={45}
                p={10}
                placeholder="Enter Advanced Video Url:"
                type="Url"
                name="videoUrl3"
                required
                value={Data.videoUrl3}
                onChange={change}
              />
              <FormLabel mb={6} ml={5} fontSize={25} textColor={"#3C5EC1"}>
                Last Video:
              </FormLabel>
              <Input
                bgColor={"white"}
                color={"grey"}
                mb={10}
                border={"1px solid"}
                borderRadius={6}
                fontSize={17}
                w={"550px"}
                h={45}
                p={10}
                placeholder="Enter Last Video Url:"
                type="Url"
                name="videoUrl4"
                required
                value={Data.videoUrl4}
                onChange={change}
              />
            </FormControl>
          </FormControl>
          <Button
            bgColor={"#3C5EC1"}
            borderRadius={8}
            borderColor={"white"}
            fontSize={23}
            w={150}
            h={50}
            variant="solid"
            onClick={submit}
          >
            Submit
          </Button>
        </Box>
      </div>
  );

  //   return (
  //     <div class="isolate px-6 py-24 sm:py-32 lg:px-8 bg-gray-300 ">
  //   {/* <div class="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]" aria-hidden="true">
  //     <div style={divStyles}></div>
  //   </div> */}
  //   <div class="mx-auto max-w-2xl text-center">
  //     <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Text </h2>
  //     <p class="mt-2 text-lg leading-8 text-gray-600">Text who ever you want where ever you want any time you want enjoy contacting freinds and families.</p>
  //   </div>
  //   <form action="#" method="POST" class="mx-auto mt-16 max-w-xl sm:mt-20">
  //     <div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
  //       <div>
  //         <label for="first-name" class="block text-sm font-semibold leading-6 text-black">First name</label>
  //         <div class="mt-2.5">
  //           <input type="text" name="first-name" id="first-name" autocomplete="given-name" class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm shadow-blue-500 ring-1 ring-inset ring-blue-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-400 sm:text-sm sm:leading-6"/>
  //         </div>
  //       </div>
  //       <div>
  //         <label for="last-name" class="block text-sm font-semibold leading-6 text-black">Last name</label>
  //         <div class="mt-2.5">
  //           <input type="text" name="last-name" id="last-name" autocomplete="family-name" class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset shadow-blue-500 ring-blue-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-400 sm:text-sm sm:leading-6"/>
  //         </div>
  //       </div>
  //       <div class="sm:col-span-2">
  //         <label for="company" class="block text-sm font-semibold leading-6 text-black">Company</label>
  //         <div class="mt-2.5">
  //           <input type="text" name="company" id="company" autocomplete="organization" class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset shadow-blue-500 ring-blue-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-400 sm:text-sm sm:leading-6"/>
  //         </div>
  //       </div>
  //       <div class="sm:col-span-2">
  //         <label for="email" class="block text-sm font-semibold leading-6 text-red-600">Email</label>
  //         <div class="mt-2.5">
  //           <input type="email" name="email" id="email" autocomplete="email" class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset shadow-blue-500 ring-blue-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-400 sm:text-sm sm:leading-6"/>
  //         </div>
  //       </div>
  //       <div class="sm:col-span-2">
  //         <label for="phone-number" class="block text-sm font-semibold leading-6 text-green-600">Phone number</label>
  //         <div class="relative mt-2.5">
  //           <div class="absolute inset-y-0 left-0 flex items-center">
  //             <label for="country" class="sr-only">Country</label>
  //             <select id="country" name="country" class="h-full rounded-md border-0 bg-transparent bg-none py-0 pl-4 pr-9 text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm">
  //               <option>US</option>
  //               <option>CA</option>
  //               <option>EU</option>
  //               <option>UK</option>
  //               <option>YE</option>
  //               <option>MA</option>
  //             </select>
  //             <svg class="pointer-events-none absolute right-3 top-0 h-full w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
  //               <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
  //             </svg>
  //           </div>
  //           <input type="tel" name="phone-number" id="phone-number" autocomplete="tel" class="block w-full rounded-md border-0 px-3.5 py-2 pl-20 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
  //         </div>
  //       </div>
  //       <div class="sm:col-span-2">
  //         <label for="message" class="block text-sm font-semibold leading-6 text-green-600">Message</label>
  //         <div class="mt-2.5">
  //           <textarea name="message" id="message" rows="4" class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></textarea>
  //         </div>
  //       </div>
  //       <div class="flex gap-x-4 sm:col-span-2">
  //         <div class="flex h-6 items-center">
  //           <button type="button" class="bg-gray-200 flex w-8 flex-none cursor-pointer rounded-full p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" role="switch" aria-checked="false" aria-labelledby="switch-1-label">
  //             <span class="sr-only">Agree to policies</span>
  //             <span aria-hidden="true" class="translate-x-0 h-4 w-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out"></span>
  //           </button>
  //         </div>
  //         <label class="text-sm leading-6 text-gray-600" id="switch-1-label">
  //           By selecting this free palestine
  //           <a href="#" class="font-semibold text-red-600">privacy&nbsp;policy</a>.
  //         </label>
  //       </div>
  //     </div>
  //     <div class="mt-10">
  //       <button type="submit" class="block w-full rounded-md bg-cyan-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Let's talk</button>
  //     </div>
  //   </form>
  // </div>
  //   );
};

export default AddCourse;
