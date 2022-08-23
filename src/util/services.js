export const services= [
    {
        id: 1,
        name: "All Services",
        link: "/services",
        header: "Regardless of how messy things are, we do our best to clean.",
        content: "Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Nulla vitae elit libero, a pharetra augue."
    },
    {
        id: 2,
        name: "Residential Cleaning Services",
        link: "/services/residential",
        header: "Regardless of how messy things are, we do our best to clean.",
        content: "Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Nulla vitae elit libero, a pharetra augue."
    },
    {
        id: 3,
        name: "Commercial Cleaning Services",
        link: "/services/commercial",
        header: "Regardless of how messy things are, we do our best to clean.",
        content: "Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Nulla vitae elit libero, a pharetra augue."
    },
    {
        id: 4,
        name: "Landscape Cleaning Services",
        link: "/services/landscape",
        header: "Regardless of how messy things are, we do our best to clean.",
        content: "Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Nulla vitae elit libero, a pharetra augue."
    },
    {
        id: 5,
        name: "Construction Cleaning Services",
        link: "/services/construction",
        header: "Regardless of how messy things are, we do our best to clean.",
        content: "Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Nulla vitae elit libero, a pharetra augue."
    }
];

export const findService = (name) => {
    return services.find(x => x.name.split(" ")[0] === name);
}