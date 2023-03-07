<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    use HasFactory;

    protected $fillable = ['item_id', 'category_id', 'category_name'];

    public function item()
    {
        return $this->belongsTo(Item::class);
    }
}
