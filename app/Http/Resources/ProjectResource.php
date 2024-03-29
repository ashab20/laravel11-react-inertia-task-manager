<?php

namespace App\Http\Resources;

use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use App\Http\Resources\UserResource;

class ProjectResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'description' => $this->description,
            'due_date' => (new Carbon($this->due_date))->format("d M, Y"),
            'created_at' => (new Carbon($this->created_at))->format("d M, Y"),
            'updated_at' => (new Carbon($this->updated_at))->format("d M, Y"),
            'status' => $this->status,
            'image_path' => $this->image_path,
            'createdBy' => (new UserResource($this->createdBy)),
            'updatedBy' => (new UserResource($this->updatedBy)),
        ];
    }
}
