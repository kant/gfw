var ApiResponse = {
  layers: {
    success: {
      status: 200,
      responseText: '{"time":0.002,"fields":{"id":{"type":"number"},"slug":{"type":"string"},"title":{"type":"string"},"title_color":{"type":"string"},"subtitle":{"type":"string"},"sublayer":{"type":"string"},"table_name":{"type":"string"},"source":{"type":"string"},"category_color":{"type":"string"},"category_slug":{"type":"string"},"category_name":{"type":"string"},"external":{"type":"boolean"},"zmin":{"type":"number"},"zmax":{"type":"number"},"xmax":{"type":"number"},"xmin":{"type":"number"},"ymax":{"type":"number"},"ymin":{"type":"number"},"tileurl":{"type":"string"},"visible":{"type":"boolean"}},"total_rows":20,"rows":[{"id":597,"slug":"umd_tree_loss_gain","title":"UMD tree cover loss & gain","title_color":"#F69","subtitle":"","sublayer":"forest2000","table_name":"","source":null,"category_color":"#F69","category_slug":"forest_clearing","category_name":"Forest change","external":false,"zmin":null,"zmax":null,"xmax":null,"xmin":null,"ymax":null,"ymin":null,"tileurl":null,"visible":true},{"id":569,"slug":"forma","title":"FORMA alerts","title_color":"#F768A1","subtitle":"(monthly, 500m, humid tropics)","sublayer":"forma_extent","table_name":"gfw2_forma","source":null,"category_color":"#F69","category_slug":"forest_clearing","category_name":"Forest change","external":false,"zmin":0,"zmax":22,"xmax":163.125,"xmin":-98.4375,"ymax":31.952162,"ymin":-31.952162,"tileurl":"https://wri-01.carto.com/tiles/gfw2_forma/{Z}/{X}/{Y}.png?sql=SELECT the_geom_webmercator,alerts,z FROM gfw2_forma WHERE z=CASE WHEN 9<{Z} THEN 17 ELSE {Z}%2B8 END","visible":true},{"id":584,"slug":"imazon","title":"Imazon SAD alerts","title_color":"#F69","subtitle":"(monthly, 250m, Brazilian Amazon)","sublayer":"imazon_sad_geografic_extent","table_name":"sad_polygons_fixed_2","source":null,"category_color":"#F69","category_slug":"forest_clearing","category_name":"Forest change","external":false,"zmin":0,"zmax":22,"xmax":null,"xmin":null,"ymax":null,"ymin":null,"tileurl":null,"visible":true},{"id":595,"slug":"loss","title":"Loss","title_color":"#F69","subtitle":"(annual, 30m, global)","sublayer":null,"table_name":"gfw_loss_year","source":null,"category_color":"#F69","category_slug":"forest_clearing","category_name":"Forest change","external":false,"zmin":0,"zmax":22,"xmax":null,"xmin":null,"ymax":null,"ymin":null,"tileurl":"https://earthengine.google.org/static/hansen_2013/gfw_loss_year/{Z}/{X}/{Y}.png","visible":true},{"id":588,"slug":"modis","title":"QUICC alerts","title_color":"#F69","subtitle":"(quarterly, 5km, <37 degrees north)","sublayer":"quicc_bounding_box_extent","table_name":"modis_forest_change_copy","source":null,"category_color":"#F69","category_slug":"forest_clearing","category_name":"Forest change","external":false,"zmin":0,"zmax":22,"xmax":null,"xmin":null,"ymax":null,"ymin":null,"tileurl":null,"visible":true},{"id":596,"slug":"forestgain","title":"Gain","title_color":"#6D6DE5","subtitle":"(12 years, 30m, global)","sublayer":null,"table_name":"forestgain","source":null,"category_color":"#6D6DE5","category_slug":"forest_clearing","category_name":"Forest change","external":true,"zmin":null,"zmax":null,"xmax":null,"xmin":null,"ymax":null,"ymin":null,"tileurl":"https://earthengine.google.org/static/hansen_2013/gain_alpha/{Z}/{X}/{Y}.png","visible":true},{"id":593,"slug":"fires","title":"NASA active fires","title_color":"#FFCC00","subtitle":"(past 7 days, 1km, global)","sublayer":null,"table_name":"global_7d","source":null,"category_color":"#F69","category_slug":"forest_clearing","category_name":"Forest change","external":false,"zmin":0,"zmax":22,"xmax":null,"xmin":null,"ymax":null,"ymin":null,"tileurl":"https://wri-01.carto.com/tiles/global_7d/{Z}/{X}/{Y}.png","visible":true},{"id":579,"slug":"nothing","title":"None","title_color":"#F69","subtitle":null,"sublayer":null,"table_name":null,"source":null,"category_color":"#F69","category_slug":"forest_clearing","category_name":"Forest change","external":false,"zmin":null,"zmax":null,"xmax":null,"xmin":null,"ymax":null,"ymin":null,"tileurl":null,"visible":true},{"id":591,"slug":"forest2000","title":"Tree cover extent","title_color":"#A5ED80","subtitle":null,"sublayer":null,"table_name":"forest2000","source":null,"category_color":"#B2D26E","category_slug":"forest_cover","category_name":"Forest cover","external":true,"zmin":null,"zmax":null,"xmax":null,"xmin":null,"ymax":null,"ymin":null,"tileurl":"http://gfw-ee-tiles.appspot.com/gfw/forest_cover_2000/{Z}/{X}/{Y}.png","visible":true},{"id":558,"slug":"intact_forest","title":"Intact forest landscapes","title_color":"#B2D26E","subtitle":null,"sublayer":null,"table_name":"world_ifl","source":null,"category_color":"#B2D26E","category_slug":"forest_cover","category_name":"Forest cover","external":false,"zmin":0,"zmax":22,"xmax":178.23925781,"xmin":-172.70314026,"ymax":69.63531494,"ymin":-55.46234505,"tileurl":"https://wri-01.carto.com/tiles/world_ifl/{Z}/{X}/{Y}.png","visible":true},{"id":590,"slug":"pantropical","title":"Tropical forest carbon stocks","title_color":"#FED98E","subtitle":null,"sublayer":null,"table_name":"pantropical","source":null,"category_color":"#B2D26E","category_slug":"forest_cover","category_name":"Forest cover","external":true,"zmin":null,"zmax":null,"xmax":null,"xmin":null,"ymax":null,"ymin":null,"tileurl":"http://gfw-ee-tiles.appspot.com/gfw/masked_forest_carbon/{Z}/{X}/{Y}.png","visible":true},{"id":581,"slug":"logging","title":"Logging","title_color":"#fecc5c","subtitle":null,"sublayer":null,"table_name":"logging_all_merged","source":null,"category_color":"#c98e6c","category_slug":"forest_use","category_name":"Forest use","external":false,"zmin":0,"zmax":22,"xmax":null,"xmin":null,"ymax":null,"ymin":null,"tileurl":"https://wri-01.carto.com/tiles/logging_all_merged/{Z}/{X}/{Y}.png","visible":true},{"id":573,"slug":"mining","title":"Mining","title_color":"#fbb685","subtitle":null,"sublayer":null,"table_name":"mining_permits_merge","source":null,"category_color":"#c98e6c","category_slug":"forest_use","category_name":"Forest use","external":false,"zmin":0,"zmax":22,"xmax":30.841667,"xmin":12.275,"ymax":5.166667,"ymin":-13.45,"tileurl":"https://wri-01.carto.com/tiles/cod_mc_4/{Z}/{X}/{Y}.png","visible":true},{"id":556,"slug":"oil_palm","title":"Oil palm","title_color":"#ee9587","subtitle":null,"sublayer":null,"table_name":"oil_palm_permits_merge","source":null,"category_color":"#c98e6c","category_slug":"forest_use","category_name":"Forest use","external":false,"zmin":0,"zmax":22,"xmax":140.94290161,"xmin":95.2365036,"ymax":5.33560896,"ymin":-8.62922573,"tileurl":"https://wri-01.carto.com/tiles/idn_oc_1/{Z}/{X}/{Y}.png","visible":true},{"id":582,"slug":"wood_fiber_plantations","title":"Wood fiber plantations","title_color":"#be8893","subtitle":null,"sublayer":null,"table_name":"fiber_all_merged","source":null,"category_color":"#c98e6c","category_slug":"forest_use","category_name":"Forest use","external":false,"zmin":null,"zmax":null,"xmax":null,"xmin":null,"ymax":null,"ymin":null,"tileurl":"https://wri-01.carto.com/tiles/permits_all_merged/{Z}/{X}/{Y}.png","visible":true},{"id":574,"slug":"protected_areas","title":"Protected areas","title_color":"#3182BD","subtitle":null,"sublayer":null,"table_name":"protected_areas","source":null,"category_color":"#3182BD","category_slug":"conservation","category_name":"Conservation","external":true,"zmin":0,"zmax":22,"xmax":141.15234375,"xmin":-156.26953125,"ymax":71.13098771,"ymin":-55.07836723,"tileurl":"http://184.73.201.235/blue/{X}/{Y}/{Z}","visible":true},{"id":592,"slug":"biodiversity_hotspots","title":"Biodiversity hotspots","title_color":"#49A39A","subtitle":null,"sublayer":null,"table_name":"biodiversity_hotspots","source":null,"category_color":"#71d5ee","category_slug":"conservation","category_name":"Conservation","external":false,"zmin":0,"zmax":22,"xmax":null,"xmin":null,"ymax":null,"ymin":null,"tileurl":"https://wri-01.carto.com/tiles/biodiversity_hotspots/{Z}/{X}/{Y}.png","visible":true},{"id":599,"slug":"resource_rights","title":"Resource Rights","title_color":"#707D92","subtitle":null,"sublayer":null,"table_name":"cameroon_communityforests","source":null,"category_color":"#707D92","category_slug":"people","category_name":"People","external":false,"zmin":null,"zmax":null,"xmax":null,"xmin":null,"ymax":null,"ymin":null,"tileurl":null,"visible":true},{"id":580,"slug":"user_stories","title":"User stories","title_color":"#f3830a","subtitle":null,"sublayer":null,"table_name":null,"source":null,"category_color":"#F2B257","category_slug":"stories","category_name":"Stories","external":false,"zmin":null,"zmax":null,"xmax":null,"xmin":null,"ymax":null,"ymin":null,"tileurl":null,"visible":true},{"id":586,"slug":"mongabay","title":"Mongabay stories","title_color":"#FEC44F","subtitle":null,"sublayer":null,"table_name":null,"source":null,"category_color":"#F2B257","category_slug":"stories","category_name":"Stories","external":false,"zmin":null,"zmax":null,"xmax":null,"xmin":null,"ymax":null,"ymin":null,"tileurl":null,"visible":true}]}'
    }
  },
  forma_alerts: {
    iso: {
      success: {
        status: 200,
        responseText: '{"data": {}}'
      },
      notfound: {
        status: 404,
        responseText: '404'
      },
      failure: {
        status: 400,
        responseText: '{"error": {}}'
      }
    },
    wdpa: {
      success: {
        status: 200,
        responseText: '{"coverage": "Humid tropical forest biome", "description": "Alerts where forest disturbances have likely occurred.", "id": "forma-alerts", "name": "FORMA", "resolution": "500 x 500 meters", "source": "MODIS", "timescale": "January 2006 to present", "units": "Alerts", "updates": "16 day", "value": 847, "wdpaid": "8950"}'
      }
    }
  }
};