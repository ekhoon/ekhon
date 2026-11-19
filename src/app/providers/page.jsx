import ProviderHero from '@/components/provider/Hero'
import HowItWorks from '@/components/provider/HowItWorks'
import ProviderBenefits from '@/components/provider/ProviderBenefits'
import ProviderCTA from '@/components/provider/ProviderCTA'
import ProviderFAQ from '@/components/provider/ProviderFAQ'
import ProviderRequirements from '@/components/provider/ProviderRequirements'
import ProviderServices from '@/components/provider/ProviderServices'
import WhyJoinEkhoon from '@/components/provider/WhyJoinEkhoon'
import React from 'react'

const page = () => {
  return (
    <div>
      <ProviderHero/>
      <WhyJoinEkhoon />
      <HowItWorks />
      <ProviderServices />
      <ProviderBenefits />
      <ProviderRequirements />
      <ProviderFAQ />
      <ProviderCTA />
    </div>
  )
}

export default page