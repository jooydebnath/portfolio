import { Award, MapPin } from 'lucide-react'
import Heading from '../shared/Heading'
import { educationData } from '@/libs/education'

const Education = () => {
  return (
    <div id="education" className="py-16 px-4 md:px-8">
      <Heading text="Learning Path" />

      <div className="mt-12 mx-auto">
        {/* উপরের ২টা কার্ড – পাশাপাশি (lg স্ক্রিনে) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {educationData.slice(0, 2).map((edu, index) => (
            <div
              key={index}
              className="relative border border-common-border p-6 rounded-2xl bg-card-background shadow-lg hover:shadow-2xl transition-all duration-500 group overflow-hidden"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Running স্ট্যাটাস ব্যাজ */}
              {edu.status === "Running" && (
                <div className="absolute top-4 right-4">
                  <span className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold bg-linear-to-r from-fuchsia-500 to-blue-600 text-white rounded-full animate-pulse">
                    <span className="w-2 h-2 bg-white rounded-full animate-ping" />
                    <span className="w-2 h-2 bg-white rounded-full absolute" />
                    Currently Pursuing
                  </span>
                </div>
              )}

              <div className="space-y-6 relative z-10">
                {/* ইনস্টিটিউশন + ডিগ্রি */}
                <div>
                  <h2 className="text-2xl font-semibold text-header">
                    {edu.institution}
                    {edu.abbreviation && (
                      <span className="text-gray-400 font-normal text-lg"> ({edu.abbreviation})</span>
                    )}
                  </h2>
                  <p className="text-paragraph text-title italic mt-1">{edu.degree}</p>
                </div>

                {/* রেজাল্ট */}
                <div className="flex items-center gap-3 rounded-lg p-3 border border-common-border  bg-slate-700/30">
                  <div className="p-2 rounded-lg bg-linear-to-r from-fuchsia-500 to-blue-600">
                    <Award className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-white font-semibold text-lg">{edu.result}</span>
                </div>

                {/* লোকেশন + ইয়ার */}
                <div className="flex flex-wrap items-center gap-6 text-sm pt-4 border-t border-slate-700/50">
                  <div className="flex items-center gap-2 bg-slate-700/30 px-4 py-2 rounded-full border border-common-border">
                    <MapPin className="w-4 h-4 text-gray-300" />
                    <span className="text-gray-300 font-medium">{edu.location}</span>
                  </div>
                  {edu.year && (
                    <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-700/30 border border-common-border">
                      <span className="text-white font-bold">{edu.year}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* হোভার ইফেক্ট */}
              <div className="absolute bottom-0 left-0 h-1.5 w-0 bg-linear-to-r from-fuchsia-500 to-blue-600 rounded-full transition-all duration-500 group-hover:w-full shadow-lg" />
            </div>
          ))}
        </div>

        {/* নিচের ১টা কার্ড – মাঝখানে সেন্টার করা */}
        {educationData.length > 2 && (
          <div className="flex justify-center">
            <div
              className="w-full border border-common-border p-6 rounded-2xl bg-card-background shadow-lg hover:shadow-2xl transition-all duration-500 group overflow-hidden relative"
              style={{ animationDelay: "300ms" }}
            >
              {educationData[2].status === "Running" && (
                <div className="absolute top-4 right-4">
                  <span className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold bg-linear-to-r from-fuchsia-500 to-blue-600 text-white rounded-full animate-pulse">
                    <span className="w-2 h-2 bg-white rounded-full animate-ping" />
                    <span className="w-2 h-2 bg-white rounded-full absolute" />
                    Currently Pursuing
                  </span>
                </div>
              )}

              <div className="space-y-6 relative z-10">
                <div>
                  <h2 className="text-2xl font-semibold text-header">
                    {educationData[2].institution}
                    {educationData[2].abbreviation && (
                      <span className="text-gray-400 font-normal text-lg"> ({educationData[2].abbreviation})</span>
                    )}
                  </h2>
                  <p className="text-paragraph text-title italic mt-1">{educationData[2].degree}</p>
                </div>

                <div className="flex items-center gap-3 rounded-lg p-3 border border-common-border bg-linear-to-r  bg-slate-700/30">
                  <div className="p-2 rounded-lg bg-linear-to-r from-fuchsia-500 to-blue-600">
                    <Award className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-white font-semibold text-lg">{educationData[2].result}</span>
                </div>

                <div className="flex flex-wrap items-center gap-6 text-sm pt-4 border-t border-slate-700/50">
                  <div className="flex items-center gap-2 bg-slate-700/30 px-4 py-2 rounded-full border border-common-border">
                    <MapPin className="w-4 h-4 text-gray-300" />
                    <span className="text-gray-300 font-medium">{educationData[2].location}</span>
                  </div>
                  {educationData[2].year && (
                    <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-700/30 border border-common-border">
                      <span className="text-white font-bold">{educationData[2].year}</span>
                    </div>
                  )}
                </div>
              </div>

              <div className="absolute bottom-0 left-0 h-1.5 w-0 bg-linear-to-r from-fuchsia-500 to-blue-600 rounded-full transition-all duration-500 group-hover:w-full shadow-lg" />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Education