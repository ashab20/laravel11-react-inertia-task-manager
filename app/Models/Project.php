<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    use HasFactory;

    function tasks()
    {
        return $this->hasMany(Task::class);
    }

    function createdBy()
    {
        return $this->belongsTo(User::class, 'created_by');
    }

    function UpdateBy()
    {
        return $this->belongsTo(User::class, 'updated_by');
    }
}