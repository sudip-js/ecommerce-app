import React from 'react'
import { CategoryPreview, PromoSection, Testimonial } from '../../components'

const HomePage = () => {
    return (
        <div>
            <PromoSection {...{
                title: 'Summer styles are finally here',
                description: "This year, our new summer collection will shelter you from the harsh elements of a world that doesn't care if you live or die."
            }} />
            <CategoryPreview label="Shop by Category" />
            <Testimonial />
            <CategoryPreview label="Shop by Collection" />
            <PromoSection {...{
                title: 'Final Stock. Up to 50% off.',
                description: 'Shop the sale',
            }} />
        </div>
    )
}

export default HomePage