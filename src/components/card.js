import React from "react";
import { Link } from "react-router";
import { Card, CardContent, CardFooter, CardHeader } from "../components/card_template"
import { Users, Clock } from "lucide-react";
import * as ProgressPrimitive from "@radix-ui/react-progress"

function Progress({ className, value, ...props }) {
  return (
    <ProgressPrimitive.Root
      data-slot="progress"
      className="bg-primary/20 relative h-2 w-full overflow-hidden rounded-full"
    >
      <ProgressPrimitive.Indicator
        data-slot="progress-indicator"
        className="bg-primary h-full w-full flex-1 transition-all"
        style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
      />
    </ProgressPrimitive.Root>
  );
}

export function ProjectCard({ project }) {
  const percentFunded = (project.currentAmount / project.goalAmount) * 100;

  return (
    <Link to={`/project/${project.id}`}>
      <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer overflow-hidden group">
        <div className="aspect-video overflow-hidden bg-gray-100">
            {/* Image */}
        </div>
        <CardHeader className="pb-3">
          <div className="flex items-start justify-between gap-2 mb-2">
            <p className="text-xs">
              {project.category}
            </p>
            <span className="text-xs text-gray-500">{project.updates} updates</span>
          </div>
          <h3 className="font-semibold line-clamp-2 group-hover:text-blue-600 transition-colors">
            {project.title}
          </h3>
          <p className="text-sm text-gray-600 mt-1">
            by {project.researcher}
          </p>
        </CardHeader>
        <CardContent className="pb-3">
          <p className="text-sm text-gray-600 line-clamp-2 mb-4">
            {project.description}
          </p>
          <div className="space-y-2">
            <Progress value={percentFunded} className="h-2" />
            <div className="flex items-center justify-between text-sm">
              <div>
                <span className="font-bold text-lg">${project.currentAmount.toLocaleString()}</span>
                <span className="text-gray-500 ml-1">
                  of ${project.goalAmount.toLocaleString()}
                </span>
              </div>
              <span className="font-semibold text-blue-600">
                {Math.round(percentFunded)}%
              </span>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex items-center justify-between text-sm text-gray-600 pt-3 border-t">
          <div className="flex items-center gap-1">
            <Users className="h-4 w-4" />
            <span>{project.backers.toLocaleString()} backers</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            <span>{project.daysLeft} days left</span>
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
}