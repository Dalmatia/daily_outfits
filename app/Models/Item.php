<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Item extends Model
{
    use HasFactory;

    protected $fillable = ['user_id', 'item_name', 'item_image'];

    public function category()
    {
        return $this->hasOne('App\Category');
    }

    public function user()
    {
        return $this->belongsTo('App\User');
    }
}
