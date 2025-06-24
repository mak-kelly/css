/* eslint-disable react/no-array-index-key */
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import cn from '../../lib/utils';

function Carousel({ items, className }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === items.length - 1 ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? items.length - 1 : prevIndex - 1));
  };

  return (
    <div className={cn('relative w-full max-w-4xl mx-auto', className)}>
      <div className="relative overflow-hidden rounded-lg">
        <div
          className="flex transition-transform duration-300 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {items.map((item, index) => (
            <div
              key={`brand-${index}`}
              className="w-full flex-shrink-0 flex items-center justify-center"
            >
              <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200 min-h-[200px] flex items-center justify-center">
                <div className="text-center">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {item.name}
                  </h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <button
        type="button"
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg border border-gray-200 transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-5 h-5 text-gray-600" />
      </button>

      <button
        type="button"
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg border border-gray-200 transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight className="w-5 h-5 text-gray-600" />
      </button>

      <div className="flex justify-center mt-4 space-x-2">
        {items.map((_, index) => (
          <button
            key={`dot-${index}`}
            type="button"
            onClick={() => setCurrentIndex(index)}
            className={cn(
              'w-2 h-2 rounded-full transition-colors',
              index === currentIndex ? 'bg-blue-600' : 'bg-gray-300',
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export default Carousel;
