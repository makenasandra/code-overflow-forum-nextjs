'use client'
import { useRouter } from 'next/navigation'
import Button from '../../../../components/button/Button'
import { useEffect } from 'react'


export default function ErrorBoundary({ error}: { error: Error}){
  const router = useRouter();

    useEffect(() => {
        console.error(error)
      }, [error])
      const goHome= () => {
        router.replace("/")
      }
      const goToAllQuestions = () => {
        router.replace("/questions")
      }
      return (
        <div>
          <h2>This Question Does Not Exist!</h2>
          <Button onClick={goHome} label="Return Home" />
          <Button onClick={goToAllQuestions} label="All Questions" />
        </div>
      )
      
}