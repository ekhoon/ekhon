import HowWorks from '@/components/howwork/HowWorks'
import Section3 from '@/components/howwork/Section3'
import Section4 from '@/components/howwork/Section4'
import Section5 from '@/components/howwork/Section5'
import Service from '@/components/howwork/Service'
import Service2 from '@/components/howwork/Service2'
import ProviderCTA from '@/components/provider/ProviderCTA'
import React from 'react'

const page = () => {
  return (
    <>
    <HowWorks/>
    <Service/>
    <Service2/>
    <Section3/>
    <Section4/>
    <Section5/>
    <ProviderCTA/>
    </>
  )
}

export default page