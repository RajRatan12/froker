 

import React, { useState } from 'react';
 import { Link, useLocation } from 'react-router-dom';

import recentPost1 from '../../assets/recent-post-1.png';
import recentPost2 from '../../assets/recent-post-2.png';
import recentPost3 from '../../assets/recent-post-3.png';
import recentPost4 from '../../assets/recent-post-4.png';
import recentPost5 from '../../assets/recent-post-5.png';
import recentPost6 from '../../assets/recent-post-6.png';
import recentPost7 from '../../assets/recent-post-7.png';
import recentPost8 from '../../assets/recent-post-8.png';
import recentPost9 from '../../assets/recent-post-9.png';
import recentPost10 from '../../assets/recent-post-10.png';
import recentPost11 from '../../assets/recent-post-11.png';
import recentPost12 from '../../assets/recent-post-12.png';
import recentPost13 from '../../assets/recent-post-13.png';
import recentPost14 from '../../assets/recent-post-14.png';
import recentPost15 from '../../assets/recent-post-15.png';
import recentPost16 from '../../assets/recent-post-16.jpg';
import recentPost17 from '../../assets/recent-post-17.png';
import recentPost18 from '../../assets/recent-post-18.jpg';
import Pagination from '../Pagination/Pagination';
import Subscribe from '../Subscribe/Subscribe';

export const posts = [
  {
    id: 0,
    image: recentPost1,
    author: 'Roshan',
    date: '3 May 2024',
    title: 'Delegating Social Media Tasks...',
    snippet: "In today's digital age, maintaining a vibrant social media presence is crucial for businesses and individuals alike. However, the demands of crafting ...",
    description: [
      { subtitle: "Delegating Social Media Tasks to AI", content: "In today's digital age, maintaining a vibrant social media presence is crucial for businesses and individuals alike. However, the demands of crafting engaging content, scheduling posts, and analyzing metrics can be overwhelming. Enter artificial intelligence (AI) – the game-changer that's revolutionizing how we manage our online presence. Let's delve into how delegating social media tasks to AI can transform your strategy and streamline your workload." },
      { subtitle: "Unlocking Efficiency with AI-Powered Schedulers", content: "Say goodbye to manual scheduling and hello to AI-powered schedulers! These innovative tools like Hootsuite, Magic Studio, Wordtune etc analyze your audience's behavior, optimize posting times, and ensure your content reaches its maximum potential. By delegating this task to AI, you free up valuable time to focus on creating quality content and engaging with your audience in real-time. Plus, with advanced features like post recycling and cross-platform scheduling, you'll never miss an opportunity to connect with your followers.", blockquote: "Empower your social media strategy by delegating tasks to AI, freeing your time to focus on creativity and engagement while algorithms handle the rest." },
      { subtitle: "Crafting Compelling Content with AI Writing Assistants", content: "Struggling to find the right words for your social media posts? AI writing assistants are here to save the day! These intelligent tools analyze your brand's voice, suggest relevant hashtags, and even provide content ideas based on trending topics. Whether you're drafting a captivating caption or brainstorming ideas for your next campaign, AI writing assistants empower you to create content that resonates with your audience effortlessly." },
      { subtitle: "Analyzing Performance Metrics with AI Analytics Tools", content: "Understanding your social media performance is key to refining your strategy and maximizing your ROI. AI analytics tools take the guesswork out of data analysis by providing actionable insights into your audience demographics, engagement metrics, and content performance. From identifying top-performing posts to predicting future trends, these tools equip you with the knowledge you need to make informed decisions and drive meaningful results for your business." }
    ],
    readTime: 10
  },
  {
    id: 1,
    image: recentPost2,
    author: 'Varshita',
    date: '23 April 2024',
    title: 'Summer Fashion Tips: Dressing...',
    snippet: "Summer has arrived, bringing with it the perfect opportunity to shed those heavy layers and embrace the light, breezy vibes of the season. Whether you...",
    description: [
      { subtitle: "Summer Fashion Tips: Dressing Up for the Sunny Days!", content: "Summer has arrived, bringing with it the perfect opportunity to shed those heavy layers and embrace the light, breezy vibes of the season. Whether you're lounging poolside with a refreshing piña colada or wandering through the vibrant stalls of a farmers' market, it's time to give your wardrobe a fresh update. Let's explore the latest summer fashion trends that will effortlessly elevate your style and have you ready for those sun-kissed selfies!" },
      { subtitle: "The Flowy Maxi Dress: Breezy Elegance", content: "Maxi dresses are the epitome of summer chic. These ankle-grazing wonders offer a sense of effortless elegance, almost like a gentle embrace from the sun itself. Embrace floral prints, pastel hues, or even trendy tie-dye patterns. The key is to find a flowy silhouette that allows you to twirl with abandon. Pair your maxi dress with strappy sandals for a versatile look that's perfect for brunch or a romantic sunset stroll along the beach." },
      { subtitle: "Straw Hats: Shade with Style", content: "A wide-brimmed straw hat is not only a stylish accessory but also a practical necessity for protecting your skin from harmful UV rays. Channeling an air of mystery, it adds a touch of intrigue to any ensemble, whether you're sipping iced coffee at a café or perusing vintage bookstores. For an added dose of glamour, pair your straw hat with oversized sunglasses for an effortlessly chic look." },
      { subtitle: "Linen Everything: Cool and Crisp", content: "Linen is the quintessential fabric of summer, known for its breathability and effortless sophistication. Whether it's a linen jumpsuit, wide-leg pants, or a classic button-down shirt, opt for neutral tones like sandy beige, soft gray, and pale blue for a timeless yet contemporary vibe. Embrace the natural wrinkles of linen for a laid-back look that exudes effortless charm. Roll up those sleeves for an extra touch of nonchalance and enjoy the cool, crisp comfort of this summer staple." }
    ],
    readTime: 5
  },
  {
    id: 2,
    image: recentPost3,
    author: 'Varshita',
    date: '23 April 2024',
    title: 'Why Brands Should Partner with...',
    snippet: "In the digital marketing landscape, a powerful alliance is brewing between brands and creators, and it’s transforming the way businesses connect with ...",
    description: [
      { subtitle: "Why Brands Should Partner with Creators", content: "In the digital marketing landscape, a powerful alliance is brewing between brands and creators, and it’s transforming the way businesses connect with their audience. Imagine a seamless dance between brands and creators, where each step taken translates into increased sales and amplified brand presence. This strategic partnership, which leads to a well-choreographed tango, is not just effective but essential in today’s competitive market. Let’s delve into why brands should team up with creators and how this collaboration can lead to unparalleled success." },
      { subtitle: "Authenticity Amplified", content: "Creators represent authenticity. Their content resonates with audiences because it’s genuine and relatable. When a creator endorses a brand, it’s perceived as a genuine recommendation rather than a scripted advertisement. This authenticity fosters trust among consumers, leading to higher conversion rates and long-term brand loyalty." },
      { subtitle: "Reach for the Stars", content: "Creators possess a loyal following, often referred to as fan armies. Leveraging their existing fan base allows brands to tap into a vast network of potential customers. When a creator promotes a brand, it can quickly gain attraction and become a trending topic among their followers. This exponential reach extends the brand's visibility far beyond traditional marketing channels, driving organic growth and brand awareness." },
      { subtitle: "Cost-Effective Magic", content: "Gone are the days of extravagant ad budgets. With creators, brands can achieve remarkable results without breaking the bank. Creators have mastered the art of creating engaging content using minimal resources. Their ability to connect with audiences on a personal level, coupled with their creative flair, makes them a cost-effective alternative to traditional advertising methods." }
    ],
    readTime: 7
  },
  {
    id: 3,
    image: recentPost4,
    author: 'Varshita',
    date: '20 April 2024',
    title: 'Introducing Meta AI: Your New...',
    snippet: "In the fast-evolving landscape of artificial intelligence, Meta AI stands out as a beacon of innovation and progres...",
    description: [
      { subtitle: "Introducing Meta AI: Your New Sidekick in the Digital Universe!", content: "In the fast-evolving landscape of artificial intelligence, Meta AI stands out as a beacon of innovation and progress. Let's delve into the capabilities, technology, research collaboration, knowledge sharing, and staying updated with this intelligent assistant. At the heart of Meta AI lies Meta Llama 3, the pinnacle of their AI model development. This advanced model powers Meta AI, making it accessible within Meta's family of apps and through the dedicated platform at meta.ai. Users can leverage Meta AI to explore, learn, and accomplish more, thanks to its sophisticated capabilities and user-friendly interface." },
      { subtitle: "What's the Buzz About Meta AI?", content: "Meta AI isn't your typical chatbot—it's the ultimate AI companion. Picture this: it's the life of the AI party, armed with the latest memes, capable of predicting your next pizza craving, and well-versed in all things tech. In essence, Meta AI is like having a brilliant assistant who's always on standby to provide insightful answers to your burning questions, whether you're enjoying your morning coffee or tackling the day's tasks." },
      { subtitle: "The Nitty-Gritty Details", content: "Let's delve deeper into what makes Meta AI tick. Powered by a fusion of natural language processing (NLP), deep learning, and a sprinkle of cosmic inspiration, Meta AI is in a league of its own. NLP Magic: Meta AI comprehends your queries with unparalleled precision, offering more than just a simple answer—it's like attending a TED Talk on existentialism with every inquiry. Deep Learning Mojo: With Meta AI, learning is a breeze. Think of it as an AI tutor with access to the entirety of human knowledge, ready to assist you at a moment's notice." }
    ],
    readTime: 8
  },
  {
    id: 4,
    image: recentPost5,
    author: 'Varshita',
    date: '8 April 2024',
    title: 'Bangalores Weather and Water...',
    snippet: "Bangalore, the city of gardens, tech hubs, and traffic snarls, is currently simmering like a pot of chai left on the stove f...",
    description: [
      { subtitle: "Bangalore's Weather and Water Crisis: A Thirsty Tale", content: "1. The Heatwave Hits Hard Bangalore, the city of gardens, tech hubs, and traffic snarls, is currently simmering like a pot of chai left on the stove for too long. And no, it's not just the usual traffic-induced sweat trickling down our backs. It's the scorching heat that's got everyone reaching for their hand fans and questioning their life choices." },
      { subtitle: "Water Woes: The Great Thirst Quenching Quest", content: "Now, let's talk about the real crisis—water scarcity. Bangaloreans are no strangers to water woes, but this time, it's hitting harder than a cricket ball to the face. Our beloved city, with its 1.3 crore population, is gasping for a sip of water like a marathon runner at the finish line. Cauvery River, our lifeline, used to be our go-to water source. But poor monsoons and inter-state water disputes have turned it into a reluctant supplier. Imagine Cauvery as that friend who says, Sure, I'll lend you some sugar, but then gives you a teaspoon when you need a kilo. Yeah, that's the situation." },
      { subtitle: "The Numbers Don't Lie", content: "Let's crunch some numbers, shall we? Currently, Bangalore has access to around 1,850 million liters per day (MLD) of water. Sounds like a lot, right? Wrong! We need at least 1,680 MLD more to quench our collective thirst. It's like having a giant water balloon fight, but you're armed with a leaky water pistol. Not cool, Mother Nature! And don't get me started on groundwater. Our borewells are drying up faster than a puddle in the Sahara. Out of the 10,995 borewells, 1,240 are at risk of croaking due to the lack of rain. High-density areas are feeling the pinch, and not in a good way." }
    ],
    readTime: 5
  },
  {
    id: 5,
    image: recentPost6,
    author: 'Varshita',
    date: '6 April 2024',
    title: 'Why Natural Skin Care is Good for You...',
    snippet: "The Magic of Natural Skin Products: More and more people are choosing natural skin products, and its easy to see why. These pro...",
    description: [
      { subtitle: "Why Natural Skin Care is Good for You: Find Top Brands and Perks", content: "The Magic of Natural Skin Products: More and more people are choosing natural skin products, and it's easy to see why. These products are made from things found in nature and don't have any bad chemicals or fake smells that can make your skin upset or hurt it over time. When you pick natural skin care, you're not just helping your skin but also choosing to help the planet." },
      { subtitle: "Good Things About Natural Skin Products", content: "Natural skin care comes with lots of perks for your skin. They're full of good stuff like vitamins, stuff that fights off bad things, and oils that your skin loves, keeping it healthy and glowing. Plus, natural products are usually safer for people with sensitive skin since they're less likely to make your skin react badly." },
      { subtitle: "Top Natural Skin Brands", content: "Eminence Organic Skin Care: This brand offers a wide range of organic skincare products, including cleansers, moisturizers, and masks, all made with natural and organic ingredients. Juice Beauty: Known for its USDA-certified organic skincare line, Juice Beauty offers high-performance products that combine organic botanical juices with advanced scientific formulations." }
    ],
    readTime: 6
  },
  {
    id: 6,
    image: recentPost7,
    author: 'Abhishek Sairam',
    date: '29 March 2024',
    title: 'Devin, the first AI software engineer...',
    snippet: "Introducing Devin, the first AI software engineer: In the realm of artificial intelligence, a groundbreaking innovation has emerged, reshaping the la",
    description: [
      { subtitle: "Devin, the first AI software engineer", content: "Introducing Devin, the first AI software engineer: In the realm of artificial intelligence, a groundbreaking innovation has emerged, reshaping the landscape of software development and setting a new standard in the field. Meet Devin, the world's first fully autonomous AI software engineer, developed by Cognition, a pioneering tech company. Devin is not just a coding assistant; he is a sophisticated teammate who can work alongside human developers or independently complete tasks, ushering in a new era of collaboration between humans and AI." },
      { subtitle: "Devin's Advanced Capabilities", content: "Devin's capabilities extend far beyond basic coding tasks. Equipped with advanced long-term reasoning and planning abilities, Devin can autonomously plan and execute complex engineering tasks, recalling relevant context, learning from experience, and rectifying errors along the way. With a comprehensive set of developer tools integrated within a sandboxed compute environment, Devin operates seamlessly, just like a human developer, ensuring a smooth workflow and efficient task execution." },
      { subtitle: "A Glimpse into Devin's Versatility", content: "Here's a glimpse of what Devin can achieve: Learning New Technologies: Devin can quickly adapt to unfamiliar technologies, enhancing their versatility and problem-solving capabilities. Building and Deploying Apps: From creating interactive websites to deploying applications, Devin streamlines the development process, incrementally adding features and deploying the final product effortlessly. Bug Fixing and Code Maintenance: Devin excels in autonomously finding and fixing bugs in codebases, aiding developers like Andrew in maintaining and debugging their projects. Training AI Models: With the ability to fine-tune its own AI models, Devin showcases its adaptability and learning prowess in the realm of artificial intelligence. Contributing to Open Source Repositories: Devin actively addresses bugs, and feature requests, and even contributes to mature production repositories, showcasing its versatility and collaborative nature." }
    ],
    readTime: 10
  },
  {
    id: 7,
    image: recentPost8,
    author: 'Varshita',
    date: '21 March 2024',
    title: 'National Creators Award 2024:... ',
    snippet: "The Grand DebutIn a digital landscape teeming with content, a few creators stand out like constellations against the night sky. The National Creators Award 2024 is...",
    description: [
      { subtitle: "National Creators Award 2024: Recognizing India’s Digital Innovators", content: "1. The Grand Debut In a digital landscape teeming with content, a few creators stand out like constellations against the night sky. The National Creators Award 2024 is our ode to these visionaries—the architects who shape our online universe. Let’s delve into the details of this prestigious award and celebrate the minds behind the pixels." },
      { subtitle: "Nominations and Rigorous Criteria", content: "Over 1.5 lakh nominations flooded our servers, each one a testament to passion, persistence, and pixelated brilliance. These nominations spanned multiple categories, from social change advocacy to gaming, education, and beyond. The rigorous evaluation process considered not just popularity but also impact—the ripple effect these creators create in the digital pond." },
      { subtitle: "The Shortlisted Creators", content: "From the bustling streets of Mumbai to the serene hills of Himachal Pradesh, creators from every corner of India made their mark. The shortlisted creators—200 in total—represent a diverse tapestry of talent. They’re the poets, the educators, the comedians, and the thought leaders. Their content resonates, educates, and entertains." },
      { subtitle: "The Awards Night: Celebrating Excellence", content: "Prime Minister Narendra Modi graced the Bharat Mandapam in New Delhi on a crisp March evening. Amidst the grandeur, he honored 23 creators across 20+ categories. These creators aren’t just influencers; they’re change-makers. They wield their digital pens to address societal issues, inspire fitness journeys, and transport us to uncharted realms." }
    ],
    readTime: 9
  },
  {
    id: 8,
    image: recentPost9,
    author: 'Varshita',
    date: '21 March 2024',
    title: 'Recession in India 2024: A Rollercoaster... ',
    snippet: "Recession in India 2024: A Rollercoaster Ride with a Dash of Curry: In the throes of a global economic downturn, India finds itself navigating turbulent waters...",
    description: [
      { subtitle: "Recession in India 2024: A Rollercoaster Ride with a Dash of Curry", content: "Recession in India 2024: A Rollercoaster Ride with a Dash of Curry: In the throes of a global economic downturn, India finds itself navigating turbulent waters, but with a unique blend of resilience and innovation. As the world grapples with recessionary pressures, India stands firm, its economy resilient amidst the storm. Despite the challenges posed by the pandemic, India's entrepreneurial spirit remains undeterred, ushering in a new era of innovation and growth. This narrative explores India's journey through the recession of 2024, highlighting its resilience, economic prowess, and the emergence of innovative solutions amidst adversity." },
      { subtitle: "Stability Amidst Uncertainty: India's Economic Resilience", content: "Amidst the global recessionary landscape, India emerges as a beacon of stability and promise. While economic giants like the United Kingdom and Japan falter, India's economy continues to march forward, fueled by robust domestic demand and strategic investments. The Reserve Bank of India's proactive measures and the government's emphasis on infrastructure development have bolstered confidence in the economy, positioning India as a resilient powerhouse amidst global uncertainty. With a projected GDP growth of 6.5% in the current fiscal year, India's economic trajectory remains promising, offering a glimmer of hope in an otherwise challenging environment." },
      { subtitle: "Innovation in Adversity: India's Entrepreneurial Spirit", content: "At the heart of India's economic resilience lies its vibrant startup ecosystem, where innovators and entrepreneurs defy the odds to create transformative solutions. The Class of 2023, undeterred by the pandemic-induced disruptions, has unleashed a wave of innovation, launching startups that cater to the evolving needs of the market. From fintech to agritech, these trailblazers are not just building businesses; they are driving economic growth and transformation, fueling India's journey towards prosperity. As the world looks towards India for inspiration and leadership, the country's entrepreneurial spirit shines bright, illuminating the path towards a brighter, more prosperous future." }
    ],
    readTime: 6
  },
  { id: 9, image: recentPost10, author: 'Varshita', date: '29 March 2024', title: 'Apple Vision Pro: A Cosmic Revolution Unlock...', snippet: 'Imagine a world where productivity meets innovation, and your workspace transcends the ordinary. Welcome to Apple Vision Pro, where the boundaries ...', description: '', readTime: 8 },
  { id: 10, image: recentPost11, author: 'Varshita', date: '21 March 2024', title: 'Where Text Becomes Cinematic Magic! From Wo...', snippet: 'Remember when you were a kid, and you’d scribble fantastical stories in your diary? Well, OpenAI’s latest creation, Sora, just took that childhood ...', description: '', readTime: 7 },
  { id: 11, image: recentPost12, author: 'Varshita', date: '15 March 2024', title: 'What Is Content Creation, Any...', snippet: 'So, youve heard the buzz about content creation. Maybe youre intrigued, or perhaps youre just here for the free snacks (dont worry,...', description: '', readTime: 5 },
  { id: 12, image: recentPost13, author: 'Varshita', date: '3 March 2024', title: 'Forbes 30 Under 30 India: Celebr...', snippet: 'Unconventional Geniuses, Fearless Entrepreneurs, and Creative Mavericks: In a world where innovation is the currency of success, the Forbes...', description: '', readTime: 9 },
  { id: 13, image: recentPost14, author: 'Varshita', date: '9 Feb 2024', title: 'Mastering the Art of Content...', snippet: 'Introduction: Welcome to the dynamic world of content creation, where creativity knows no bounds and innovation thrives. Whether youre passionate...', description: '', readTime: 8 },
  { id: 14, image: recentPost15, author: 'Varshita', date: '9 Feb 2024', title: 'The Slice of History: How Food Delivery...', snippet: 'Picture this: It’s 1889, and King Umberto and Queen Margherita of Italy are sitting in their royal chambers, stomachs growling. But wait, what’s that...', description: '', readTime: 6 },
  { id: 15, image: recentPost16, author: 'Varshita', date: '9 Feb 2024', title: 'A Comprehensive Guide to Des...', snippet: 'Choosing Your Garden Spot: So, youve decided to embark on a kitchen garden adventure? Fantastic! First things first—pick your plot. Whether you...', description: '', readTime: 7 },
  { id: 16, image: recentPost17, author: 'Varshita', date: '9 Feb 2024', title: 'Efficient Meal Prep: Time-Savi...', snippet: 'Quick and Efficient Meal Prep Strategies Hello, culinary enthusiasts! Lets delve into efficient meal preparation and kitchen hacks designed to streamli...', description: '', readTime: 6 },
  { id: 17, image: recentPost18, author: 'Varshita', date: '8 Feb 2024', title: 'Unlocking the Secrets of Healt...', snippet: 'Welcome to the delightful universe of healthy food habits! In this journey, vegetables take center stage, and your taste buds are in for a ...', description: '', readTime: 7 }
  // Add other posts similarly...
];

const RecentPosts = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const postsPerPage = 9;
  const pagesVisited = currentPage * postsPerPage;

  const displayPosts = posts.slice(pagesVisited, pagesVisited + postsPerPage).map((post) => (
    <Link to={`/post/${post.id}`} key={post.id} className="flex flex-col space-y-4 cursor-pointer">
      <div style={{ backgroundImage: `url(${post.image})` }} className="w-full h-96 rounded-lg bg-cover bg-center" />
      <div className="p-4">
        <p className="text-sm text-orange-600">by {post.author} - {post.date}</p>
        <h2 className="text-lg font-bold mt-1">{post.title}</h2>
        <p className="text-gray-700 mt-1">{post.snippet}</p>
      </div>
    </Link>
  ));

  const pageCount = Math.ceil(posts.length / postsPerPage);

  const changePage = ({ selected }) => {
    setCurrentPage(selected);
  };

  const location = useLocation();
  const isBlogPostPage = location.pathname.startsWith('/post/');

  return (
    <div className="container mx-auto p-0 py-10 mt-5 m-0 box-border">
      <header className="mb-10">
        <h2 className="text-4xl font-sans text-black">{isBlogPostPage ? 'Popular Posts' : 'Recent Posts'}</h2>
      </header>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {displayPosts}
      </div>
      <div className="flex justify-center mt-8">
        <Pagination pageCount={pageCount} changePage={changePage} />
      </div>
      <Subscribe />
    </div>
  );
};

export default RecentPosts;