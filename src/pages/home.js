import Hero from '@/sections/Hero/Hero'
import Programs from '@/sections/Programs/Programs'
import Reviews from '@/sections/Reviews/Reviews'
import Pricing from '@/sections/Pricing/Pricing'
import FAQ from '@/sections/FAQ/FAQ'
import Cta from '@/sections/Cta/Cta'

const homePage = () => `${Hero()}${Programs()}${Reviews()}${Pricing()}${FAQ()}${Cta()}`

export default homePage