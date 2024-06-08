import MyButton from "../Button/MyButton"
import logo from "/public/logo.png"

import React from 'react'

const UnloggedHeader = () => {
  return (
    <>
    <div id="unloggedHeader" className="w-screen h-20 bg-darkblue px-8 flex justify-between items-center mb-8">
        <img src="https://s3-alpha-sig.figma.com/img/7d4c/9277/04bd33df48766b783c0133aa94571ff9?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=divasakUB9H0YN6XEK8UhxepnNx17Hh4gZIAFU4ymNWzQLXFfdphajzFIKhuRtyFz9LU2j5lm2U6P9HU7MNksXVwWMBLbF8q81qaZE~z1nONsormljfivIBALEAq1wmgIgJPR3nOm7IYzPqP~KY6qt3fyQeTKw-QDYrb-~2fvePxlJ5JMUZLqQcU-dShKYZZcmJZ6NXx03KDcwxIjNrGPz9Or5BdN10Qht-z1j6dvQ84xZgVHmtzow7pEyNQVYAWo8H-Da6636kAlik5Q9NTdMPqNM0m42rlJo84bnl4n5UqQwYHNd4TU6kZUnckuGAxwzaH9sPPJDuyX0IQLQVmtQ__" alt="UnB"
        width={75} height={75} />
        <div>
            <MyButton text="Login" className="bg-neutral-500 text-lg text-white px-8 py-2 rounded-lg outline outline-2 outline-white"></MyButton>
        </div>
    </div>   
    </>
  )
}

export default UnloggedHeader