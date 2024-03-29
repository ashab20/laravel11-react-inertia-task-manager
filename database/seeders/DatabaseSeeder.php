<?php

namespace Database\Seeders;

use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Project;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        User::factory()->create(['name' => 'Ashab Uddin',
            'email' => 'admin@gmail.com',
            'password' => bcrypt('123.321A'),
            'email_verified_at' => now(),
        ]);

        // Commented out Project factory since Project model is not defined
        Project::factory()->count(30)->hasTasks(30)->create();
    }

}
