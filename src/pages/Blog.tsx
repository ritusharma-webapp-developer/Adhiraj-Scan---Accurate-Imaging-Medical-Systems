import { Calendar, User, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Blog() {
  const posts = [
    {
      id: 1,
      title: 'Understanding the Differences Between MRI and CT Scans',
      excerpt: 'While both MRI and CT scans are powerful diagnostic tools, they use different technologies and are suited for different medical conditions. Learn which scan is right for you.',
      date: 'October 15, 2023',
      author: 'Dr. Rajesh Kumar',
      category: 'Patient Education',
      image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 2,
      title: 'The Role of PET CT in Early Cancer Detection',
      excerpt: 'PET CT scans have revolutionized oncology by allowing doctors to detect cancer at a cellular level before anatomical changes occur. Discover how this technology saves lives.',
      date: 'November 2, 2023',
      author: 'Dr. Neha Sharma',
      category: 'Oncology',
      image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 3,
      title: 'How to Prepare for Your First MRI Scan',
      excerpt: 'Feeling anxious about your upcoming MRI? Read our comprehensive guide on what to expect, how to prepare, and tips for staying calm during the procedure.',
      date: 'November 20, 2023',
      author: 'Adhiraj Scan Team',
      category: 'Preparation Guides',
      image: 'https://images.unsplash.com/photo-1551076805-e1869033e561?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 4,
      title: 'Why PSMA PET is a Game Changer for Prostate Cancer',
      excerpt: 'Prostate-Specific Membrane Antigen (PSMA) PET imaging offers unprecedented accuracy in detecting prostate cancer metastasis. Learn why it is becoming the gold standard.',
      date: 'December 5, 2023',
      author: 'Dr. Amit Verma',
      category: 'Advanced Imaging',
      image: 'https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 5,
      title: 'The Importance of High-Resolution Sonography During Pregnancy',
      excerpt: 'Ultrasound is a safe and essential tool for monitoring fetal development. Understand the milestones checked during routine pregnancy sonography.',
      date: 'January 12, 2024',
      author: 'Dr. Priya Patel',
      category: 'Women\'s Health',
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 6,
      title: 'Digital X-Ray vs. Traditional X-Ray: What You Need to Know',
      excerpt: 'Digital radiography offers numerous benefits over traditional film X-rays, including lower radiation doses and immediate results. Explore the advantages.',
      date: 'February 8, 2024',
      author: 'Adhiraj Scan Team',
      category: 'Technology',
      image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Page Header */}
      <div className="bg-blue-900 text-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-4">Health & Diagnostics Blog</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Stay informed with the latest insights, guides, and news in medical imaging.
          </p>
        </div>
      </div>

      {/* Blog Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {posts.map((post) => (
            <article key={post.id} className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-slate-100 flex flex-col">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">
                  {post.category}
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center text-sm text-slate-500 mb-4 space-x-4">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    {post.date}
                  </div>
                  <div className="flex items-center">
                    <User className="w-4 h-4 mr-1" />
                    {post.author}
                  </div>
                </div>
                <h2 className="text-xl font-bold text-slate-900 mb-3 line-clamp-2 hover:text-blue-600 transition-colors">
                  <Link to={`/blog/${post.id}`}>{post.title}</Link>
                </h2>
                <p className="text-slate-600 mb-6 line-clamp-3 flex-grow">
                  {post.excerpt}
                </p>
                <Link
                  to={`/blog/${post.id}`}
                  className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-800 transition-colors mt-auto"
                >
                  Read Article <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
