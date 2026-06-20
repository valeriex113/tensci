import React from "react";
import { Link } from "react-router";
import { Users, Clock } from "lucide-react";
import * as ProgressPrimitive from "@radix-ui/react-progress";

export function ProposalCard({ project }) {
  const percentFunded = (project.currentAmount / project.goalAmount) * 100;

  return (
    <Link to={`/proposal/${project.id}`}>
      <div
        data-slot="card"
        className="bg-card text-card-foreground flex flex-col gap-3 rounded-xl border h-full hover:shadow-lg transition-shadow cursor-pointer overflow-hidden group"
      >
        {/* Aspect Video Image Wrapper */}
        <div className="aspect-video overflow-hidden bg-gray-100">
          <img
            src={project.imageUrl}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>

        <div
          data-slot="card-header"
          className="@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1 px-4 pt-3"
        >
          <div className="flex items-start justify-between gap-2 mb-1">
            <p className="text-xs font-medium text-gray-500">{project.category}</p>
            <span className="text-xs text-gray-400">{project.updates} updates</span>
          </div>

          <h3 className="text-base font-semibold line-clamp-2 group-hover:text-blue-600 transition-colors leading-snug">
            {project.title}
          </h3>
          <p className="text-xs text-gray-500 mt-0.5">by {project.researcher}</p>
        </div>

        <div data-slot="card-content" className="px-4 pb-2">
          <div className="space-y-1.5">
            <ProgressPrimitive.Root
              data-slot="progress"
              className="bg-gray-200 relative h-1.5 w-full overflow-hidden rounded-full"
            >
              <ProgressPrimitive.Indicator
                data-slot="progress-indicator"
                className="bg-blue-600 h-full w-full flex-1 transition-all"
                style={{ transform: `translateX(-${100 - (percentFunded || 0)}%)` }}
              />
            </ProgressPrimitive.Root>
            <div className="flex items-center justify-between text-xs">
              <div>
                <span className="font-bold text-base">
                  ${project.currentAmount.toLocaleString()}
                </span>
                <span className="text-gray-400 ml-1">
                  of ${project.goalAmount.toLocaleString()}
                </span>
              </div>
              <span className="font-semibold text-blue-600">
                {Math.round(percentFunded)}%
              </span>
            </div>
          </div>
        </div>

        <div
          data-slot="card-footer"
          className="px-4 pb-4 flex items-center justify-between w-full text-xs text-gray-500 pt-2 border-t mt-auto"
        >
          <div className="flex items-center gap-1">
            <Users className="h-3.5 w-3.5" />
            <span>{project.backers.toLocaleString()} supporters </span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="h-3.5 w-3.5" />
            <span>{project.daysLeft} days left</span>
          </div>
        </div>
      </div>
    </Link>
  );
}

export function PublicationCard({ project }) {
  return (
    <Link to={`/publication/${project.id}`}>

      <div
        data-slot="card"
        className="bg-card text-card-foreground flex flex-col gap-3 rounded-xl border h-full hover:shadow-lg transition-shadow cursor-pointer overflow-hidden group"
      >

        <div className="aspect-video overflow-hidden bg-gray-100">
          <img
            src={project.imageUrl}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>

        <div
          data-slot="card-header"
          className="@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1 px-4 pt-3"
        >
          <div className="flex items-start justify-between gap-2 mb-1">
            <p className="text-xs font-medium text-gray-500">{project.category}</p>
            <span className="text-xs text-gray-400">{project.updates} updates</span>
          </div>

          <h3 className="text-base font-semibold line-clamp-2 group-hover:text-blue-600 transition-colors leading-snug">
            {project.title}
          </h3>
          <p className="text-xs text-gray-500 mt-0.5">by {project.researcher}</p>
        </div>

        <div data-slot="card-content" className="px-4 pb-2">
          <div className="space-y-1.5">
            <div className="flex items-center justify-between text-xs">
              <span className="font-bold text-base">
                ${project.goalAmount.toLocaleString()}
              </span>
            </div>
          </div>
        </div>

        <div
          data-slot="card-footer"
          className="px-4 pb-4 flex items-center justify-between w-full text-xs text-gray-500 pt-2 border-t mt-auto"
        >
          <div className="flex items-center gap-1">
            <Users className="h-3.5 w-3.5" />
            <span>{project.backers.toLocaleString()} supporters </span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="h-3.5 w-3.5" />
            <span>{project.daysAgo} days ago</span>
          </div>
        </div>
      </div>
    </Link>
  );
}

